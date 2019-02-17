import { Component } from '@angular/core';

import { Person } from './person';
import { Soccer, Gym, Boliche } from './sports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'strategy-pattern';

  constructor() {
    const Allan = new Person('Allan Passos', new Boliche());

    Allan.workout();
  }
}
