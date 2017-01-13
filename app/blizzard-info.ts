import { AbilityInfo } from './ability-info.interface';
import { Ability } from './ability.interface';
import { Blizzard } from './blizzard';

export class BlizzardInfo implements AbilityInfo {
	name: string = 'Blizzard';
	cooldown: number = 12;
	power: number = 5;
	targets: string = "All";
	description: string = 'A blizzard is summoned to the battlefield.';
	
	createAbility(): Ability {
		return new Blizzard(this.name, this.cooldown, this.power, this.targets, this.description);
	}
}