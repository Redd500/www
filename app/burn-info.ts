import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';
import { Burn } from './burn';
import { Stat } from './stat';

export class BurnInfo implements EffectInfo {
	name: string = 'Burn';
	power: number = 7;
	maxTicks: number = 5;
	description: string = 'Deals damage equal to its Power stat after the affected unit\'s turn';
	
	stats: Stat[] = [
		new Stat('Max Ticks', 'How long this status effect lasts when first applied.', this.maxTicks),
		new Stat('Power', 'Affects how much damage this status effect deals.', this.power)
	];
	
	createStatusEffect(): Effect {
		return new Burn(this.name, this.power, this.maxTicks, this.description);
	}
}