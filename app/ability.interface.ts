import { GameInfo } from './game-info';
import { Stat } from './stat';

export interface Ability {
	name: string;
	cooldown: number;
	ticks: number;
	targets: any;
	
	description: string;
	
	stats: Stat[];
	
	nextTick(spd: number, game: GameInfo, user: any): void;
	useAbility(game: GameInfo, user: any): void;
}