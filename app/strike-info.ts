import { AbilityInfo } from './ability-info.interface';
import { Ability } from './ability.interface';
import { Strike } from './strike';

export class StrikeInfo implements AbilityInfo {
	name: string = 'Strike';
	cooldown: number = 3;
	power: number = 10;
	targets: number = 1;
	description: string = 'A simple attack.';
	
	createAbility(): Ability {
		return new Strike(this.name, this.cooldown, this.power, this.targets, this.description);
	}
}