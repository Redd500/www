import { Hero } from './hero.interface';
import { GameInfo } from './game-info';
import { HeroInfo } from './hero-info.interface';
import { Effect } from './effect.interface';
import { EffectInfo } from './effect-info.interface';
	
export class HeroSlot {
	hero: Hero;
	
	maxRespawn: number = 5;
	respawn: number = 0;
	
	constructor(game: GameInfo) {
		let newHeroInfo: HeroInfo = game.allHeroInfo[Math.floor(Math.random() * game.allHeroInfo.length)];
		this.newHero(newHeroInfo);
	}
	
	nextTick(game: GameInfo): void {
		if (this.respawn > 0) {
			this.respawn--;
			if (this.respawn == 0) {
				let newHeroInfo: HeroInfo = game.allHeroInfo[Math.floor(Math.random() * game.allHeroInfo.length)];
				this.newHero(newHeroInfo);
			}
		}
		else if (this.hero.health > 0) {
			this.hero.nextTick(game);
		}
	}
	
	checkIfDead(game: GameInfo): void {
		if (this.hero.health <= 0 && this.respawn == 0) {
			this.newHero(game.deadHeroInfo);
			this.respawn = this.maxRespawn;
		}
	}
	
	newHero(info: HeroInfo): void {
		this.hero = info.createHero();
	}
	
	takeHit(pwr: number, eff: EffectInfo[]): void {
		this.hero.takeHit(pwr, eff);
	}
}