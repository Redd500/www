import { Ability } from './ability.interface';
import { GameInfo } from './game-info';
import { Hero } from './hero.interface';
import { Enemy } from './enemy.interface';
import { HeroSlot } from './hero-slot';
import { EnemySlot } from './enemy-slot';
import { EffectInfo } from './effect-info.interface';
import { Effect } from './effect.interface';

export class Blizzard implements Ability {
	name: string;
	cooldown: number;
	ticks: number;
	power: number;
	targets: string;
	
	constructor(cd: number, pwr: number, trg: string) {
		this.name = 'Blizzard';
		this.cooldown = cd;
		this.ticks = 0;
		this.power = pwr;
		this.targets = trg;
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
			for (let x of game.enemies) {
				x.takeHit(this.power, []);
			}
		}
		else {
			for (let x of game.heroes) {
				x.takeHit(this.power, []);
			}
		}
	}
}