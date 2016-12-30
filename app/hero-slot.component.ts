import { Component, Input } from '@angular/core';
import { HeroSlot } from './hero-slot';

@Component({
	moduleId: module.id,
	selector: 'hero-slot',
	template: `
		<div class="name">{{slot.hero.name}}</div>
		<div class="maxHealth">
			<div class="health"
				[style.width]="(slot.hero.health/slot.hero.maxHealth*100) + '%'">
			</div>
			<div class="healthText">
				{{slot.hero.health}}/{{slot.hero.maxHealth}}
			</div>
		</div>
		<div class="respawn">
			Respawn: {{slot.respawn}}
		</div>
	`,
	styles: [`
		:host {
			display: block;
			padding: 2px;
		}
	
		.maxHealth {
			position: relative;
			width: 100%;
			height: 15px;
			background-color: #9b1414;
		}
		
		.healthText {
			width: 100%;
			text-align: center;
			color: white;
			line-height: 1em;
			position: absolute;
		}
		
		.health {
			position: absolute;
			height: 100%;
			background-color: #19a01b;
		}
	`]
})

export class HeroSlotComponent {
	@Input() slot: HeroSlot;
}