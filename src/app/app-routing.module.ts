import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { MainPageComponent } from './components/main-page/main-page.component';


const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'team',component:TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
