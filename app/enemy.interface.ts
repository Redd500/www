import { Ability } from './ability.interface';
import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';
import { GameInfo } from './game-info';
import { Stat } from './stat';

export interface Enemy {
	name: string;
	
	bounty: number;

	health: number;
	maxHealth: number;
	
	speedPriority: number;
	damagePriority: number;
	
	abilities: Ability[];
	statusEffects: Effect[];
	
	stats: Stat[];
	
	nextTick(game: GameInfo): void;
	useAbilities(game: GameInfo): void;
	applyStatusEffectsBefore(game: GameInfo): void;
	applyStatusEffectsAfter(game: GameInfo): void;
	takeHit(pwr: number, eff: EffectInfo[]): void;
}