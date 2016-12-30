import { HeroInfo } from './hero-info.interface';
import { Hero } from './hero.interface';
import { Warrior } from './warrior';
import { AbilityInfo } from './ability-info.interface';
import { StrikeInfo } from './strike-info';
import { EffectInfo } from './effect-info.interface';

export class WarriorInfo implements HeroInfo {
	maxHealth: number = 100;
	
	speedPriority: number = 1;
	damagePriority: number = 5;
	
	defense: number = 2;
	
	abilities: AbilityInfo[] = [ new StrikeInfo(), new StrikeInfo() ];
	statusEffects: EffectInfo[] = [];
	
	createHero(): Hero {
		return new Warrior(this.maxHealth, this.speedPriority, this.damagePriority, this.defense, this.abilities, this.statusEffects);
	}
}