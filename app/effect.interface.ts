import { GameInfo } from './game-info';

export interface Effect {
	name: string;
	ticks?: number;

	applyEffectBefore(game: GameInfo, affected: any): void;
	applyEffectAfter(game: GameInfo, affected: any): void;
}