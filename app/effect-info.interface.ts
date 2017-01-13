import { Effect } from './effect.interface';

export interface EffectInfo {
	name: string;
	description: string;
	
	stats: Stat[];

	createStatusEffect(): Effect;
}