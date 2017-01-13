import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';
import { Stun } from './stun';
import { Stat } from './stat';

export class StunInfo implements EffectInfo {
	name: string = 'Stun';
	maxTicks: number = 2;
	description: string = 'The affected unit cannot use abilities.';
	
	stats: Stat[] = [
		new Stat('Max Ticks', 'How long this status effect lasts when first applied.', this.maxTicks)
	];
	
	createStatusEffect(): Effect {
		return new Stun(this.name, this.maxTicks, this.description);
	}
}