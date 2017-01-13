import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';
import { Bleed } from './bleed';
import { Stat } from './stat';

export class BleedInfo implements EffectInfo {
	name: string = 'Bleed';
	power: number = 1;
	maxTicks: number = 5;
	description: string = 'Deals damage equal to its Power stat before the affected unit\'s turn, and deals damage equal to 2 times its Power stat after the affected unit\'s turn.';
	
	stats: Stat[] = [
		new Stat('Max Ticks', 'How long this status effect lasts when first applied.', this.maxTicks),
		new Stat('Power', 'Affects how much damage this status effect deals.', this.power)
	];
	
	createStatusEffect(): Effect {
		return new Bleed(this.name, this.power, this.maxTicks, this.description);
	}
}