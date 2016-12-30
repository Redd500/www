import { Enemy } from './enemy.interface';
import { GameInfo } from './game-info';
import { EnemyInfo } from './enemy-info.interface';
import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';

export class EnemySlot {
	enemy: Enemy;
	
	maxRespawn: number = 5;
	respawn: number = 0;
	
	constructor(game: GameInfo) {
		let newEnemyInfo: EnemyInfo = game.allEnemyInfo[Math.floor(Math.random() * game.allEnemyInfo.length)];
		this.newEnemy(newEnemyInfo);
	}
	
	nextTick(game: GameInfo): void {
		if (this.respawn > 0) {
			this.respawn--;
			if (this.respawn == 0) {
				let newEnemyInfo: EnemyInfo = game.allEnemyInfo[Math.floor(Math.random() * game.allEnemyInfo.length)];
				this.newEnemy(newEnemyInfo);
			}
		}
		else if (this.enemy.health > 0) {
			this.enemy.nextTick(game);
		}
	}
	
	checkIfDead(game: GameInfo): void {
		if (this.enemy.health <= 0 && this.respawn == 0) {
			game.money += this.enemy.bounty;
			this.newEnemy(game.deadEnemyInfo);
			this.respawn = this.maxRespawn;
		}
	}
	
	newEnemy(info: EnemyInfo): void {
		this.enemy = info.createEnemy();
	}
	
	takeHit(pwr: number, eff: EffectInfo[]): void {
		this.enemy.takeHit(pwr, eff);
	}
}