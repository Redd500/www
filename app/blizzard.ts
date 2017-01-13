import { Ability } from './ability.interface';
import { GameInfo } from './game-info';
import { Stat } from './stat';

export class Blizzard implements Ability {
	name: string;
	cooldown: number;
	ticks: number;
	power: number;
	targets: string;
	description: string;
	
	stats: Stat[];
	
	constructor(nm: string, cd: number, pwr: number, trg: string, desc: string) {
		this.name = nm;
		this.cooldown = cd;
		this.ticks = 0;
		this.power = pwr;
		this.targets = trg;
		this.description = desc;
		
		this.stats = [
			new Stat('Cooldown', 'How many ticks it takes for the ability to be used.', cd),
			new Stat('Power', 'The amount of damage this attack will do per hit.', pwr),
			new Stat('Targets', 'The number of opponents that this ability targets', trg)
		];
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