import { GameInfo } from './game-info';

export interface Ability {
	name: string;
	cooldown: number;
	ticks: number;
	
	nextTick(spd: number, game: GameInfo, user: any): void;
	useAbility(game: GameInfo, user: any): void;
}