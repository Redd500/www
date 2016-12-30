import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';
import { Stun } from './stun';

export class StunInfo implements EffectInfo {
	maxTicks: number = 2;
	
	createStatusEffect(): Effect {
		return new Stun(this.maxTicks);
	}
}