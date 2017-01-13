import { Component, Input } from '@angular/core';
import { EnemySlot } from './enemy-slot';

@Component({
	moduleId: module.id,
	selector: 'enemy-info',
	template: `
		<div class="name">{{slot.enemy.name}}</div>
		<div class="maxHealth">
			<div class="health"
				[style.width]="(slot.enemy.health/slot.enemy.maxHealth*100) + '%'">
			</div>
			<div class="healthText">
				{{slot.enemy.health}}/{{slot.enemy.maxHealth}}
			</div>
		</div>
		<div class="respawn">
			Respawn: {{slot.respawn}}
		</div>
		<div class="stats">
			<div class="infoTitle">
				Stats
			</div>
			<div class="listSlot" *ngFor="let stat of slot.enemy.stats">
				<div class="statName">
					{{stat.name}}
				</div>
				<div class="statPower">
					{{stat.power}}
				</div>
				<div class="description noMoveOver">
					{{stat.description}}
				</div>
			</div>
		</div>
		<div class="container">
			<div class="abilities">
				<div class="infoTitle">
					Abilities
				</div>
				<div class="listSlot" *ngFor="let ability of slot.enemy.abilities">
					<div class="abilityName">
						{{ability.name}}
					</div>
					<div class="abilityMaxCooldown">
						<div class="abilityCooldown"
							[style.width]="(ability.ticks/ability.cooldown*100) + '%'">
						</div>
						<div class="abilityCooldownText">
							{{ability.ticks}}/{{ability.cooldown}}
						</div>
					</div>
					<div class="description">
						<div class="abilityDescription">
							{{ability.description}}
						</div>
						<div class="listSlot" *ngFor="let stat of ability.stats">
							<div class="statName">
								{{stat.name}}
							</div>
							<div class="statPower">
								{{stat.power}}
							</div>
							<div class="description noMoveOver">
								{{stat.description}}
							</div>
						</div>
						<div class="listSlot" *ngFor="let effect of ability.effects">
							<div class="effectName">
								{{effect.name}}
							</div>
							<div class="description">
								<div class="abilityDescription">
									{{effect.description}}
								</div>
								<div class="listSlot" *ngFor="let stat of effect.stats">
									<div class="statName">
										{{stat.name}}
									</div>
									<div class="statPower">
										{{stat.power}}
									</div>
									<div class="description noMoveOver">
										{{stat.description}}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="effects">
				<div class="infoTitle">
					Effects
				</div>
				<div class="listSlot" *ngFor="let effect of slot.enemy.statusEffects">
					<div class="effectName">
						{{effect.name}}
					</div>
					<div *ngIf="effect.ticks != undefined">
						Ticks left: {{effect.ticks}}
					</div>
					<div *ngIf="effect.ticks == undefined">
						Indefinite
					</div>
					<div class="description">
						<div class="abilityDescription">
							{{effect.description}}
						</div>
						<div class="listSlot" *ngFor="let stat of effect.stats">
							<div class="statName">
								{{stat.name}}
							</div>
							<div class="statPower">
								{{stat.power}}
							</div>
							<div class="description noMoveOver">
								{{stat.description}}
							</div>
						</div>
					</div>
				</div>
			</div>
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
		
		.container {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: flex-start;
			height: 100%;
		}
		
		.abilities {
			width: 45%;
		}
		
		.abilityMaxCooldown {
			position: relative;
			width: 100%;
			height: 15px;
			background-color: #e2e2e2;
		}
		
		.abilityCooldown {
			position: absolute;
			height: 100%;
			background-color: #857cff;
		}
		
		.abilityCooldownText {
			width: 100%;
			text-align: center;
			color: black;
			line-height: 1em;
			position: absolute;
		}
		
		.effects {
			width: 45%;
		}
		
		.infoTitle {
			margin-top: 20px;
			margin-bottom: 5px;
			border-bottom: 2px solid;
		}
		
		.listSlot {
			margin-top: 10px;
		}
		
		.description {
			border: 2px solid;
			padding: 2px;
			background-color: #f6f6f6;
			display: none;
			position: absolute;
			width: 300px;
			z-index: 100;
		}
		
		.listSlot:hover>.description {
			display: block;
		}
		
		.listSlot:hover>.description.noMoveOver:hover {
			display: none;
		}
		
		.abilityDescription {
			border-bottom: 2px solid;
		}
	`]
})

export class EnemyInfoComponent {
	@Input() slot: EnemySlot;
}