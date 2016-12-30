import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';
import { Bleed } from './bleed';

export class BleedInfo implements EffectInfo {
	damage: number = 1;
	maxTicks: number = 5;
	
	createStatusEffect(): Effect {
		return new Bleed(this.damage, this.maxTicks);
	}
}