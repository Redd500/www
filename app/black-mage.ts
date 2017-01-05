import { Hero } from './hero.interface';
import { Ability } from './ability.interface';
import { AbilityInfo } from './ability-info.interface';
import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';
import { GameInfo } from './game-info';
import { Stat } from './stat';

export class BlackMage implements Hero {
	name: string;

	health: number;
	maxHealth: number;
	
	speedPriority: number;
	damagePriority: number;
	
	abilities: Ability[];
	statusEffects: Effect[];
	
	stats: Stat[];
	
	constructor(hlth: number, spd: number, dmg: number, abl: AbilityInfo[], eff: EffectInfo[]) {
		this.name = "Black Mage";
		this.maxHealth = hlth;
		this.health = hlth;
		this.speedPriority = spd;
		this.damagePriority = dmg;
		this.stats = [
			new Stat('Speed Priority', 'This determines who gets to use their abilities first, from highest to lowest priority', spd),
			new Stat('Damage Priority', 'This determines who gets attacked by their opponents\' abilities first, from highest to lowest priority', dmg)
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
		if (this.health <= 0) {
			return;
		}
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
		this.health -= pwr;
		for (let x of eff) {
			this.statusEffects.push(x.createStatusEffect());
		}
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