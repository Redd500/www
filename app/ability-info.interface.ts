import { Ability } from './ability.interface';

export interface AbilityInfo {
	cooldown: number;
	
	createAbility(): Ability;
}