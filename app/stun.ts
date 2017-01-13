import { GameInfo } from './game-info';
import { Effect } from './effect.interface';
import { Stat } from './stat';

export class Stun implements Effect {
	name: string;
	maxTicks: number;
	ticks: number;
	stun: number;
	description: string;
	
	stats: Stat[];
	
	constructor(nm: string, tcks: number, desc: string) {
		this.name = nm;
		this.maxTicks = tcks;
		this.ticks = tcks;
		this.stun = 1;
		this.description = desc;
		
		this.stats = [
			new Stat('Max Ticks', 'How long this status effect lasts when first applied.', tcks)
		];
	}

	applyEffectBefore(game: GameInfo, affected: any): void {
		let numStuns = 0;
		for (let x of affected.statusEffects) {
			if (x.speedUp) {
				this.stun += x.speedUp;
			}
			else if (x.speedDown) {
				this.stun -= x.speedDown;
			}
			else if (x.stun) {
				numStuns++;
			}
		}
		for (let x of affected.abilities) {
			x.ticks -= this.stun / numStuns;
		}
		this.stun = 1;
		this.ticks--;
	}
	
	applyEffectAfter(game: GameInfo, affected: any): void {
	
	}
}