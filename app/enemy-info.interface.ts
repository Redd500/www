import { Enemy } from './enemy.interface';
import { AbilityInfo } from './ability-info.interface';
import { EffectInfo } from './effect-info.interface';

export interface EnemyInfo {
	bounty: number;

	maxHealth: number;
	
	speedPriority: number;
	damagePriority: number;
	
	abilities: AbilityInfo[];
	statusEffects: EffectInfo[];
	
	createEnemy(): Enemy;
}