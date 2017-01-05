import { Hero } from './hero.interface';
import { HeroInfo } from './hero-info.interface';
import { BlackMage } from './black-mage';
import { AbilityInfo } from './ability-info.interface';
import { EffectInfo } from './effect-info.interface';
import { FireballInfo } from './fireball-info';
import { LightningBoltInfo } from './lightning-bolt-info';
import { BlizzardInfo } from './blizzard-info';

export class BlackMageInfo implements HeroInfo {
	maxHealth: number = 20;
	
	speedPriority: number = 0.6;
	damagePriority: number = 2;
	
	abilities: AbilityInfo[] = [ new FireballInfo(), new LightningBoltInfo(), new BlizzardInfo() ];
	statusEffects: EffectInfo[] = [];
	
	createHero(): Hero {
		return new BlackMage(this.maxHealth, this.speedPriority, this.damagePriority, this.abilities, this.statusEffects);
	}
}