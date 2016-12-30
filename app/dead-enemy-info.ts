import { EnemyInfo } from './enemy-info.interface';
import { Enemy } from './enemy.interface';
import { DeadEnemy } from './dead-enemy';
import { AbilityInfo } from './ability-info.interface';
import { EffectInfo } from './effect-info.interface';

export class DeadEnemyInfo implements EnemyInfo {
	bounty: number = 0;

	maxHealth: number = 1;
	
	speedPriority: number = 0;
	damagePriority: number = 0;
	
	defense: number = 0;
	
	abilities: AbilityInfo[] = [];
	statusEffects: EffectInfo[] = [];
	
	createEnemy(): Enemy {
		return new DeadEnemy(this.bounty, this.maxHealth, this.speedPriority, this.damagePriority, this.defense, this.abilities, this.statusEffects);
	}
}