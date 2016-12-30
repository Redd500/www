import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';
import { Burn } from './burn';

export class BurnInfo implements EffectInfo {
	damage: number = 7;
	maxTicks: number = 5;
	
	createStatusEffect(): Effect {
		return new Burn(this.damage, this.maxTicks);
	}
}