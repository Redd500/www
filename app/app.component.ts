import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<game></game>`,
  styles: [`
	:host {
		display: block;
		width: 100%;
		height: 100%;
	}
  `]
})
export class AppComponent  { name = 'Angular'; }
