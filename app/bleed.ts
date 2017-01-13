import { GameInfo } from './game-info';
import { Effect } from './effect.interface';
import { Stat } from './stat';

export class Bleed implements Effect {
	name: string;
	power: number;
	maxTicks: number;
	ticks: number;
	description: string;
	
	stats: Stat[];
	
	constructor(nm: string, pwr: number, tcks: number, desc: string) {
		this.name = nm;
		this.power = pwr;
		this.maxTicks = tcks;
		this.ticks = tcks;
		this.description = desc;
		
		this.stats = [
			new Stat('Max Ticks', 'How long this status effect lasts when first applied.', tcks),
			new Stat('Power', 'Affects how much damage this status effect deals.', pwr)
		];
	}

	applyEffectBefore(game: GameInfo, affected: any): void {
		affected.health -= this.power;
	}
	
	applyEffectAfter(game: GameInfo, affected: any): void {
		affected.health -= this.power * 2;
		this.ticks--;
	}
}