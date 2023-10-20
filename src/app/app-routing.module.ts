import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastermindComponent } from './views/mastermind/mastermind.component';
import { HelpComponent } from './views/help/help.component';

const routes: Routes = [
  {
    path: '',
    component: MastermindComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
