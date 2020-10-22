import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './gurds/auth.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'main',component:MainPageComponent ,canActivate:[AuthGuard]},
  {path:'main/team',component:TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
