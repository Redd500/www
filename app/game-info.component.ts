import { Component, Input } from '@angular/core';
import { GameInfo } from './game-info';
import { HeroSlot } from './hero-slot';
import { EnemySlot } from './enemy-slot';

@Component({
	moduleId: module.id,
	selector: 'game-info',
	template: `
		<div class="title">{{game.title}}</div>
		<div class="money">{{game.money}} G</div>
		<div class="ticks">{{game.miniTicks}}</div>
		<div class="container">
			<div class="column-1">
				Heroes
				<div class="slot-holder">
					<li class="slot-item" *ngFor="let hero of game.heroes" (click)="selectHero(hero)">
						<hero-slot [slot]="hero"></hero-slot>
					</li>
				</div>
			</div>
			<div class="column-2">
				Hero Info
				<div class="info-holder">
					<div *ngIf="selectedHero">
						<hero-info [slot]="selectedHero"></hero-info>
					</div>
					<div class="not-selected" *ngIf="!selectedHero">
						Click on a hero to see their detailed info
					</div>
				</div>
			</div>
			<div class="column-2">
				Enemy Info
				<div class="info-holder">
					<div *ngIf="selectedEnemy">
						<enemy-info [slot]="selectedEnemy"></enemy-info>
					</div>
					<div class="not-selected" *ngIf="!selectedEnemy">
						Click on an enemy to see their detailed info
					</div>
				</div>
			</div>
			<div class="column-1">
				Enemies
				<div class="slot-holder">
					<li class="slot-item" *ngFor="let enemy of game.enemies" (click)="selectEnemy(enemy)">
						<enemy-slot [slot]="enemy"></enemy-slot>
					</li>
				</div>
			</div>
		</div>
	`,
	styles: [`
		.title {
			font: bold 40px Tahoma, Geneva, sans-serif;
			text-align: center;
			color: #8e1e1b;
			margin: 10px;
		}
		
		.not-selected {
			margin-top: 20px;
		}
		
		.money {
			font: 25px Arial, Helvetica, sans-serif;
			text-align: center;
			color: #d8a900;
		}
		
		.ticks {
			text-align: center;
		}
		
		.container {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: flex-start;
			height: 100%;
		}
		
		.column-1 {
			width: 20%;
			height: 80%;
			font: 20px "Lucida Console", Monaco, monospace;
			text-align: center;
		}
		
		.column-2 {
			width: 25%;
			height: 80%;
			font: 20px "Lucida Console", Monaco, monospace;
			text-align: center;
		}
		
		.info-holder {
			font: 15px "Lucida Console", Monaco, monospace;
			display: inline-block;
			width: 100%;
			height: 100%;
			border: 3px solid;
			overflow-y: scroll;
			background-color: #f6f6f6;
		}
		
		.info-holder::-webkit-scrollbar {
			width: 15px;
			background-color: transparent;
			border-left: 3px solid;
		}
		
		.slot-holder {
			display: inline-block;
			font: 15px "Lucida Console", Monaco, monospace;
			width: 100%;
			height: 100%;
			border: 3px solid;
			overflow-y: scroll;
			background-color: #f6f6f6;
		}
		
		.slot-holder::-webkit-scrollbar {
			width: 15px;
			background-color: transparent;
			border-left: 3px solid;
		}
		
		.slot-holder::-webkit-scrollbar-thumb {
			width: 5px;
			background-color: black;
		}
		
		.slot-item {
			display: block;
			height: 50px;
			border: 1px solid;
		}
		
		:host {
			display: block;
			height: 70%;
		}
	`]
})

export class GameInfoComponent {
	@Input() game: GameInfo;
	
	selectedHero: HeroSlot;
	selectedEnemy: EnemySlot;
	
	selectHero(slot: HeroSlot) {
		this.selectedHero = slot;
	}
	selectEnemy(slot: EnemySlot) {
		this.selectedEnemy = slot;
	}
}