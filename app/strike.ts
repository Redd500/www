import { Ability } from './ability.interface';
import { GameInfo } from './game-info';
import { Hero } from './hero.interface';
import { Enemy } from './enemy.interface';
import { HeroSlot } from './hero-slot';
import { EnemySlot } from './enemy-slot';

export class Strike implements Ability {
	name: string;
	cooldown: number;
	ticks: number;
	targets: number;
	power: number;
	
	constructor(cd: number, trg: number, pwr: number) {
		this.name = 'Strike';
		this.cooldown = cd;
		this.ticks = 0;
		this.power = pwr;
		this.targets = trg;
	}
	nextTick(spd: number, game: GameInfo, user: any): void {
		this.ticks += spd;
		while (this.ticks >= this.cooldown) {
			this.ticks -= this.cooldown;
			this.useAbility(game, user);
		}
	}
	useAbility(game: GameInfo, user: any): void {
		if (!user.bounty) {
			let targets: EnemySlot[] = game.getEnemiesWithGreatestThreat();
			if (targets.length > 0) {
				targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, []);
			}
		}
		else {
			let targets: HeroSlot[] = game.getHeroesWithGreatestThreat();
			if (targets.length > 0) {
				targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, []);
			}
		}
	}
}