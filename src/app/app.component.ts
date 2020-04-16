import { Component } from '@angular/core';
// AfterViewInit

import {PostMessageAbstract} from './post-message.abstract';

// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
// import { AuthService } from './auth.service';

// import { environment } from './environment';

// import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [AngularFireAuth],
})
export class AppComponent extends PostMessageAbstract {
  // implements AfterViewInit
  // public user: Observable<firebase.User>;
  public scrollIntoView = true;
  public behavior = 'smooth';
  public block = 'center';
  public inline = 'start';

  // constructor(public auth: AngularFireAuth) {
  //   super();

  //   this.user = firebaseAuth.authState;
  // }

  // constructor(public auth: AuthService) {
  //   super();
  // }

  // ngAfterViewInit() {
    // this.scrollIntoView = true;
    // this.behavior = 'smooth';
    // this.block = 'center';
    // this.inline = 'start';

    // this.authService.signIn();
  // }

  public login() {
    // this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public logout() {
    // this.auth.signOut();
  }

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
