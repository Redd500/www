export class Stat {
	name: string;
	description: string;
	power: number;
	
	constructor(name: string, desc: string, pwr: number) {
		this.name = name;
		this.description = desc;
		this.power = pwr;
	}
}