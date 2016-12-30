import { Ability } from './ability.interface';
import { GameInfo } from './game-info';
import { Hero } from './hero.interface';
import { Enemy } from './enemy.interface';
import { HeroSlot } from './hero-slot';
import { EnemySlot } from './enemy-slot';
import { EffectInfo } from './effect-info.interface';
import { Effect } from './effect.interface';

export class Fireball implements Ability {
	name: string;
	cooldown: number;
	ticks: number;
	power: number;
	
	effects: EffectInfo[];
	
	constructor(cd: number, pwr: number, eff: EffectInfo[]) {
		this.name = 'Fireball';
		this.cooldown = cd;
		this.ticks = 0;
		this.power = pwr;
		
		this.effects = eff;
	}
	nextTick(spd: number, game: GameInfo, user: any): void {
		this.ticks += spd;
		while (this.ticks >= this.cooldown) {
			this.ticks -= this.cooldown;
			this.useAbility(game, user);
		}
	}
	useAbility(game: GameInfo, user: any): void {
		if (!user.bounty) {
			let targets: EnemySlot[] = game.getEnemiesWithGreatestThreat();
			if (targets.length > 0) {
				targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, this.effects);
			}
		}
		else {
			let targets: HeroSlot[] = game.getHeroesWithGreatestThreat();
			if (targets.length > 0) {
				targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, this.effects);
			}
		}
	}
}