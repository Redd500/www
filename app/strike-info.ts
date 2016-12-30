import { AbilityInfo } from './ability-info.interface';
import { Ability } from './ability.interface';
import { Strike } from './strike';

export class StrikeInfo implements AbilityInfo {
	cooldown: number = 3;
	targets: number = 1;
	power: number = 10;
	
	createAbility(): Ability {
		return new Strike(this.cooldown, this.targets, this.power);
	}
}