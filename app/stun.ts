import { GameInfo } from './game-info';
import { Effect } from './effect.interface';

export class Stun implements Effect {
	name: string;
	maxTicks: number;
	ticks: number;
	stun: number;
	
	constructor(tcks: number) {
		this.name = 'Stun';
		this.maxTicks = tcks;
		this.ticks = tcks;
		this.stun = 1;
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