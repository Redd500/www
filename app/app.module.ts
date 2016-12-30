import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { GameInfoComponent } from './game-info.component';
import { GameController } from './game-controller';
import { HeroSlotComponent } from './hero-slot.component';
import { EnemySlotComponent } from './enemy-slot.component';
import { HeroInfoComponent } from './hero-info.component';
import { EnemyInfoComponent } from './enemy-info.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
	AppComponent,
	GameInfoComponent,
	GameController,
	HeroSlotComponent,
	EnemySlotComponent,
	HeroInfoComponent,
	EnemyInfoComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
