import { Enemy } from './enemy.interface';
import { Ability } from './ability.interface';
import { AbilityInfo } from './ability-info.interface';
import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';
import { GameInfo } from './game-info';
import { Stat } from './stat';

export class DeadEnemy implements Enemy {
	name: string;
	
	bounty: number;
	
	health: number;
	maxHealth: number;
	
	speedPriority: number;
	damagePriority: number;
	
	abilities: Ability[];
	statusEffects: Effect[];
	
	stats: Stat[];
	
	constructor(bnty: number, hlth: number, spd: number, dmg: number, abl: AbilityInfo[], eff: EffectInfo[]) {
		this.name = "Dead";
		this.bounty = bnty;
		this.maxHealth = hlth;
		this.health = 0;
		this.speedPriority = spd;
		this.damagePriority = dmg;
		this.stats = [
			new Stat('Speed Priority', 'This determines who gets to use their abilities first, from highest to lowest priority', spd),
			new Stat('Damage Priority', 'This determines who gets attacked by their opponents\' abilities first, from highest to lowest priority', dmg),
			new Stat('Bounty', 'The amount of money you\'ll earn for defeating this enemy', bnty)
		];
		
		let newAbl: Ability[] = [];
		
		for (let x of abl) {
			newAbl.push(x.createAbility());
		}
		
		this.abilities = newAbl;
		
		let newEff: Effect[] = [];
		
		for (let x of eff) {
			newEff.push(x.createStatusEffect());
		}
		
		this.statusEffects = newEff;
	}
	
	nextTick(game: GameInfo): void {
		this.applyStatusEffectsBefore(game);
		this.useAbilities(game);
		this.applyStatusEffectsAfter(game);
		this.removeStatusEffects();
	}
	useAbilities(game: GameInfo): void {
		for (let x of this.abilities) {
			x.nextTick(1, game, this);
		}
	}
	applyStatusEffectsBefore(game: GameInfo): void {
		for (let x of this.statusEffects) {
			x.applyEffectBefore(game, this);
		}
	}
	applyStatusEffectsAfter(game: GameInfo): void {
		for (let x of this.statusEffects) {
			x.applyEffectAfter(game, this);
		}
	}
	
	takeHit(pwr: number, eff: EffectInfo[]): void {
	}
	
	removeStatusEffects(): void {
		let x: number = 0;
		while (x < this.statusEffects.length) {
			if (this.statusEffects[x].ticks && this.statusEffects[x].ticks <= 0) {
				this.statusEffects.splice(x, 1);
			}
			else {
				x++;
			}
		}
	}
}