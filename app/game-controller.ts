import { GameInfo } from './game-info';
import { HeroSlot } from './hero-slot';
import { EnemySlot } from './enemy-slot';
import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'game',
	template: `
		<game-info [game]="game"></game-info>
	`,
	styles: [`
		:host {
			display: block;
			height: 100%;
		}
	`]
})

export class GameController {
	game: GameInfo;
	
	constructor() {
		this.game = new GameInfo();
	}
	
	ngOnInit() {
		setInterval(() => this.nextTick(), 200);
	}
	
	nextTick(): void {
		this.game.miniTicks--;
		
		if (this.game.miniTicks == 0) {
			this.game.miniTicks = this.game.miniTicksToTick;
			
			let speedSortedHeroes: HeroSlot[] = this.game.getHeroesByGreatestSpeed();
			let speedSortedEnemies: EnemySlot[] = this.game.getEnemiesByGreatestSpeed();
			
			let currentHero: HeroSlot;
			let currentEnemy: EnemySlot;
			
			currentHero = speedSortedHeroes.shift();
			currentEnemy = speedSortedEnemies.shift();
			
			while (currentHero || currentEnemy) {
				if (!currentEnemy || (currentHero && currentHero.hero.speedPriority >= currentEnemy.enemy.speedPriority)) {
					currentHero.nextTick(this.game);
					currentHero = speedSortedHeroes.shift();
				}
				else if (!currentHero || (currentEnemy && currentEnemy.enemy.speedPriority > currentHero.hero.speedPriority)) {
					currentEnemy.nextTick(this.game);
					currentEnemy = speedSortedEnemies.shift();
				}
			}
			
			for (let x of this.game.heroes) {
				x.checkIfDead(this.game);
			}
			for (let x of this.game.enemies) {
				x.checkIfDead(this.game);
			}
		}
	}
}

var game = new GameController();