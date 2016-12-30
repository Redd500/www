import { GameInfo } from './game-info';
import { Effect } from './effect.interface';

export class Burn implements Effect {
	name: string;
	damage: number;
	maxTicks: number;
	ticks: number;
	
	constructor(dmg: number, tcks: number) {
		this.name = 'Burn';
		this.damage = dmg;
		this.maxTicks = tcks;
		this.ticks = tcks;
	}

	applyEffectBefore(game: GameInfo, affected: any): void {
	
	}
	
	applyEffectAfter(game: GameInfo, affected: any): void {
		affected.health -= this.damage;
		this.ticks--;
	}
}