import { Ability } from './ability.interface';
import { GameInfo } from './game-info';
import { HeroSlot } from './hero-slot';
import { EnemySlot } from './enemy-slot';
import { EffectInfo } from './effect-info.interface';

export class TearInto implements Ability {
	name: string;
	cooldown: number;
	ticks: number;
	power: number;
	hits: number;
	
	effects: EffectInfo[];
	
	constructor(cd: number, pwr: number, hits: number, eff: EffectInfo[]) {
		this.name = 'Tear Into';
		this.cooldown = cd;
		this.ticks = 0;
		this.power = pwr;
		this.hits = hits;
		
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
				let trg = targets[Math.floor(Math.random() * targets.length)]
				for (let x = 0; x < this.hits; x++) {
					trg.takeHit(this.power, this.effects);
				}
			}
		}
		else {
			let targets: HeroSlot[] = game.getHeroesWithGreatestThreat();
			if (targets.length > 0) {
				let trg = targets[Math.floor(Math.random() * targets.length)]
				for (let x = 0; x < this.hits; x++) {
					trg.takeHit(this.power, this.effects);
				}
			}
		}
	}
}