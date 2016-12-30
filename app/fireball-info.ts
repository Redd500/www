import { AbilityInfo } from './ability-info.interface';
import { Ability } from './ability.interface';
import { EffectInfo } from './effect-info.interface';
import { BurnInfo } from './burn-info';
import { Fireball } from './fireball';

export class FireballInfo implements AbilityInfo {
	cooldown: number = 5;
	power: number = 15;
	
	effects: EffectInfo[] = [ new BurnInfo() ];
	
	createAbility(): Ability {
		return new Fireball(this.cooldown, this.power, this.effects);
	}
}