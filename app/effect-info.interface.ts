import { Effect } from './effect.interface';

export interface EffectInfo {
	createStatusEffect(): Effect;
}