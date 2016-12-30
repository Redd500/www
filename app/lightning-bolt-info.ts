import { AbilityInfo } from './ability-info.interface';
import { EffectInfo } from './effect-info.interface';
import { StunInfo } from './stun-info';
import { LightningBolt } from './lightning-bolt';
import { Ability } from './ability.interface';

export class LightningBoltInfo implements AbilityInfo {
	cooldown: number = 8;
	power: number = 10;
	
	targets: number = 3;
	
	effects: EffectInfo[] = [ new StunInfo() ];
	
	createAbility(): Ability {
		return new LightningBolt(this.cooldown, this.power, this.targets, this.effects);
	}
}