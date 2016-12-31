import { EnemySlot } from './enemy-slot';
import { HeroSlot } from './hero-slot';
import { EnemyInfo } from './enemy-info.interface';
import { HeroInfo } from './hero-info.interface';
import { BanditInfo } from './bandit-info';
import { WarriorInfo } from './warrior-info';
import { BlackMageInfo } from './black-mage-info';
import { WolfInfo } from './wolf-info';
import { DeadHeroInfo } from './dead-hero-info';
import { DeadEnemyInfo } from './dead-enemy-info';
import { OnInit } from '@angular/core';

export class GameInfo {
	title: string;

	money: number;
	
	maxHeroCost: number;
	maxHeroCostMultiplier: number;
	
	maxEnemyCost: number;
	maxEnemyCostMultiplier: number;
	
	miniTicksToTick: number;
	miniTicks: number;
	
	maxEnemies: number;
	enemies: EnemySlot[];
	
	maxHeroes: number;
	heroes: HeroSlot[];
	
	allEnemyInfo: EnemyInfo[];
	allHeroInfo: HeroInfo[];
	
	deadHeroInfo: HeroInfo;
	deadEnemyInfo: EnemyInfo;
	
	constructor() {
		this.title = 'Wonderful Web War';

		this.money = 0;
		
		this.maxHeroCost = 100;
		this.maxHeroCostMultiplier = 1.1;
		
		this.maxEnemyCost = 50;
		this.maxEnemyCostMultiplier = 1.07;
		
		this.miniTicksToTick = 20;
		this.miniTicks = 20;
		
		this.maxEnemies = 10;
		this.enemies = [];
		
		this.maxHeroes = 6;
		this.heroes = [];
		
		this.allEnemyInfo = [ new BanditInfo(), new WolfInfo() ];
		this.allHeroInfo = [ new WarriorInfo(), new BlackMageInfo() ];
		
		this.deadHeroInfo = new DeadHeroInfo();
		this.deadEnemyInfo = new DeadEnemyInfo();
		
		for (let x = 0; x < this.maxHeroes; x++) {
			this.heroes.push(new HeroSlot(this));
		}
		for (let x = 0; x < this.maxEnemies; x++) {
			this.enemies.push(new EnemySlot(this));
		}
	}
	
	getHeroesByGreatestSpeed(): HeroSlot[] {
		return this.heroes.concat().sort((h1: HeroSlot, h2: HeroSlot) => h2.hero.speedPriority - h1.hero.speedPriority);
	}
	getEnemiesByGreatestSpeed(): EnemySlot[] {
		return this.enemies.concat().sort((e1: EnemySlot, e2: EnemySlot) => e2.enemy.speedPriority - e1.enemy.speedPriority);
	}
	
	getHeroesWithGreatestThreat(): HeroSlot[] {
		let targets: HeroSlot[] = this.heroes.concat().sort((h1: HeroSlot, h2: HeroSlot) => h2.hero.damagePriority - h1.hero.damagePriority);
		let aliveTargets: HeroSlot[] = targets.filter((slot: HeroSlot) => slot.hero.health > 0);
		return aliveTargets.filter((slot: HeroSlot) => slot.hero.damagePriority == aliveTargets[0].hero.damagePriority);
	}
	getEnemiesWithGreatestThreat(): EnemySlot[] {
		let targets: EnemySlot[] = this.enemies.concat().sort((e1: EnemySlot, e2: EnemySlot) => e2.enemy.damagePriority - e1.enemy.damagePriority);
		let aliveTargets: EnemySlot[] = targets.filter((slot: EnemySlot) => slot.enemy.health > 0);
		return aliveTargets.filter((slot: EnemySlot) => slot.enemy.damagePriority == aliveTargets[0].enemy.damagePriority);
	}
}