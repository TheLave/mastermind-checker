import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastermindComponent } from './views/mastermind/mastermind.component';
import { HelpComponent } from './views/help/help.component';
import { PinComponent } from './components/pin/pin.component';
import { RippleDirective } from './directives/ripple.directive';
import { NavComponent } from './components/nav/nav.component';
import { PopupDirective } from './directives/popup.directive';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    MastermindComponent,
    HelpComponent,
    PinComponent,
    RippleDirective,
    NavComponent,
    PopupDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
