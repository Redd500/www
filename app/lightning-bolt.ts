import { Ability } from './ability.interface';
import { GameInfo } from './game-info';
import { HeroSlot } from './hero-slot';
import { EnemySlot } from './enemy-slot';
import { EffectInfo } from './effect-info.interface';
import { Stat } from './stat';

export class LightningBolt implements Ability {
	name: string;
	cooldown: number;
	ticks: number;
	power: number;
	targets: number;
	description: string;
	
	effects: EffectInfo[];
	
	stats: Stat[];
	
	constructor(nm: string, cd: number, pwr: number, trg: number, eff: EffectInfo[], desc: string) {
		this.name = nm;
		this.cooldown = cd;
		this.ticks = 0;
		this.power = pwr;
		this.targets = trg;
		this.description = desc;
		
		this.effects = eff;
		
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
			let targets: EnemySlot[] = game.getEnemiesWithGreatestThreat();
			if (targets.length > 0) {
				for (let x = 0; x < this.targets; x++) {
					targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, this.effects);
				}
			}
		}
		else {
			let targets: HeroSlot[] = game.getHeroesWithGreatestThreat();
			if (targets.length > 0) {
				for (let x = 0; x < this.targets; x++) {
					targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, this.effects);
				}
			}
		}
	}
}