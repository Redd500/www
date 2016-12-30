import { HeroInfo } from './hero-info.interface';
import { Hero } from './hero.interface';
import { DeadHero } from './dead-hero';
import { AbilityInfo } from './ability-info.interface';
import { EffectInfo } from './effect-info.interface';

export class DeadHeroInfo implements HeroInfo {
	maxHealth: number = 1;
	
	speedPriority: number = 0;
	damagePriority: number = 0;
	
	defense: number = 0;
	
	abilities: AbilityInfo[] = [];
	statusEffects: EffectInfo[] = [];
	
	createHero(): Hero {
		return new DeadHero(this.maxHealth, this.speedPriority, this.damagePriority, this.defense, this.abilities, this.statusEffects);
	}
}