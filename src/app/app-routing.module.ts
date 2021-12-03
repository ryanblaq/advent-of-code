import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayOneComponent } from './day-one/day-one.component'; 
import { DayTwoComponent } from './day-two/day-two.component';
import { DayThreeComponent } from './day-three/day-three.component';

const routes: Routes = [
  { path: 'dayOne', component: DayOneComponent },
  { path: 'dayTwo', component: DayTwoComponent },
  { path: 'dayThree', component: DayThreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }