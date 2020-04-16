import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';

// import { AngularFireModule } from 'angularfire2';
// import { environment } from './environment';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireAuthModule } from '@angular/fire/auth';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule
  ], //, AngularFireAuthModule]
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  // providers: [AngularFireAuth]
})
export class AppModule { }
