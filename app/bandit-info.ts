import { EnemyInfo } from './enemy-info.interface';
import { Enemy } from './enemy.interface';
import { Bandit } from './bandit';
import { AbilityInfo } from './ability-info.interface';
import { StrikeInfo } from './strike-info';
import { EffectInfo } from './effect-info.interface';

export class BanditInfo implements EnemyInfo {
	bounty: number = 5;

	maxHealth: number = 220;
	
	speedPriority: number = 1;
	damagePriority: number = 3;
	
	abilities: AbilityInfo[] = [ new StrikeInfo() ];
	statusEffects: EffectInfo[] = [];
	
	createEnemy(): Enemy {
		return new Bandit(this.bounty, this.maxHealth, this.speedPriority, this.damagePriority, this.abilities, this.statusEffects);
	}
}