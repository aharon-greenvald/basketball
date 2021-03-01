import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './gurds/auth.guard';
import { ResultsComponent } from './components/results/results.component';
import { MyStatsComponent } from './components/my-stats/my-stats.component';
import { TeamsStatsComponent } from './components/teams-stats/teams-stats.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'main',component:MainPageComponent,canActivate:[AuthGuard] },
  {path:'team',component:TeamComponent},
  {path:'results/:id',component:ResultsComponent},
  {path:'my-stats',component:MyStatsComponent},
  {path:'teams-stats',component:TeamsStatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
