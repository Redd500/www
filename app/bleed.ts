import { GameInfo } from './game-info';
import { Effect } from './effect.interface';

export class Bleed implements Effect {
	name: string;
	damage: number;
	maxTicks: number;
	ticks: number;
	
	constructor(dmg: number, tcks: number) {
		this.name = 'Bleed';
		this.damage = dmg;
		this.maxTicks = tcks;
		this.ticks = tcks;
	}

	applyEffectBefore(game: GameInfo, affected: any): void {
		affected.health -= this.damage;
	}
	
	applyEffectAfter(game: GameInfo, affected: any): void {
		affected.health -= this.damage * 2;
		this.ticks--;
	}
}