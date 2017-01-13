import { AbilityInfo } from './ability-info.interface';
import { Ability } from './ability.interface';
import { EffectInfo } from './effect-info.interface';
import { BleedInfo } from './bleed-info';
import { TearInto } from './tear-into';

export class TearIntoInfo implements AbilityInfo {
	name: string = 'Tear Into';
	cooldown: number = 7;
	power: number = 5;
	hits: number = 4;
	targets: number = 1;
	description: string = 'The unit rips into the flesh of their opponent.'
	
	effects: EffectInfo[] = [ new BleedInfo() ];
	
	createAbility(): Ability {
		return new TearInto(this.name, this.cooldown, this.power, this.hits, this.targets, this.effects, this.description);
	}
}