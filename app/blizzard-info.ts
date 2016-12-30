import { AbilityInfo } from './ability-info.interface';
import { Ability } from './ability.interface';
import { Blizzard } from './blizzard';

export class BlizzardInfo implements AbilityInfo {
	cooldown: number = 12;
	power: number = 5;
	targets: string = "All";
	
	createAbility(): Ability {
		return new Blizzard(this.cooldown, this.power, this.targets);
	}
}