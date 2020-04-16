import { Component } from '@angular/core';

import {PostMessageAbstract} from './post-message.abstract';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends PostMessageAbstract {
  public scrollIntoView = true;
  public behavior = 'smooth';
  public block = 'center';
  public inline = 'start';

  public onClick(event) {
    // console.log('onClick()', event);
  }

  public onFocus(event) {
    // console.log('onFocus()', event);

    if (!this.scrollIntoView) return;
    
    const {behavior, block, inline} = this;
    event.target.scrollIntoView({behavior, block, inline});
  }
}
