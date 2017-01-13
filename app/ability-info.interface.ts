import { Ability } from './ability.interface';

export interface AbilityInfo {
	name: string;
	cooldown: number;
	targets: any;
	description: string;
	
	createAbility(): Ability;
}