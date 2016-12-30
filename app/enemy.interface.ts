import { Ability } from './ability.interface';
import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';
import { GameInfo } from './game-info';

export interface Enemy {
	name: string;
	
	bounty: number;

	health: number;
	maxHealth: number;
	
	speedPriority: number;
	damagePriority: number;
	
	defense: number;
	
	abilities: Ability[];
	statusEffects: Effect[];
	
	nextTick(game: GameInfo): void;
	useAbilities(game: GameInfo): void;
	applyStatusEffectsBefore(game: GameInfo): void;
	applyStatusEffectsAfter(game: GameInfo): void;
	takeHit(pwr: number, eff: EffectInfo[]): void;
}