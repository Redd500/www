import { AbilityInfo } from './ability-info.interface';
import { Ability } from './ability.interface';
import { EffectInfo } from './effect-info.interface';
import { BurnInfo } from './burn-info';
import { Fireball } from './fireball';

export class FireballInfo implements AbilityInfo {
	name: string = 'Fireball';
	cooldown: number = 5;
	power: number = 15;
	targets: number = 1;
	description: string = 'A fireball is launched towards an opponent.';
	
	effects: EffectInfo[] = [ new BurnInfo() ];
	
	createAbility(): Ability {
		return new Fireball(this.name, this.cooldown, this.power, this.targets, this.effects, this.description);
	}
}