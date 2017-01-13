import { GameInfo } from './game-info';
import { Stat } from './stat';

export interface Effect {
	name: string;
	ticks?: number;
	description: string;
	
	stats: Stat[];

	applyEffectBefore(game: GameInfo, affected: any): void;
	applyEffectAfter(game: GameInfo, affected: any): void;
}