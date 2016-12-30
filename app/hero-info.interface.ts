import { Hero } from './hero.interface';
import { AbilityInfo } from './ability-info.interface';
import { EffectInfo } from './effect-info.interface';

export interface HeroInfo {
	maxHealth: number;
	
	speedPriority: number;
	damagePriority: number;
	
	defense: number;
	
	abilities: AbilityInfo[];
	statusEffects: EffectInfo[];
	
	createHero(): Hero;
}