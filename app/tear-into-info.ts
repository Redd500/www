import { AbilityInfo } from './ability-info.interface';
import { Ability } from './ability.interface';
import { EffectInfo } from './effect-info.interface';
import { BleedInfo } from './bleed-info';
import { TearInto } from './tear-into';

export class TearIntoInfo implements AbilityInfo {
	cooldown: number = 7;
	power: number = 5;
	hits: number = 4;
	
	effects: EffectInfo[] = [ new BleedInfo() ];
	
	createAbility(): Ability {
		return new TearInto(this.cooldown, this.power, this.hits, this.effects);
	}
}