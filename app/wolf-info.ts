import { EnemyInfo } from './enemy-info.interface';
import { Enemy } from './enemy.interface';
import { Wolf } from './wolf';
import { AbilityInfo } from './ability-info.interface';
import { TearIntoInfo } from './tear-into-info';
import { EffectInfo } from './effect-info.interface';

export class WolfInfo implements EnemyInfo {
	bounty: number = 8;

	maxHealth: number = 50;
	
	speedPriority: number = 2;
	damagePriority: number = 5;
	
	abilities: AbilityInfo[] = [ new TearIntoInfo() ];
	statusEffects: EffectInfo[] = [];
	
	createEnemy(): Enemy {
		return new Wolf(this.bounty, this.maxHealth, this.speedPriority, this.damagePriority, this.abilities, this.statusEffects);
	}
}