export class Stat {
	name: string;
	description: string;
	power: any;
	
	constructor(name: string, desc: string, pwr: any) {
		this.name = name;
		this.description = desc;
		this.power = pwr;
	}
}