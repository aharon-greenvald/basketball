import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TeamComponent } from './components/team/team.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultsComponent } from './components/results/results.component';
import { MyStatsComponent } from './components/my-stats/my-stats.component';
import { TeamsStatsComponent } from './components/teams-stats/teams-stats.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TeamComponent,
    LoginComponent,
    NavbarComponent,
    ResultsComponent,
    MyStatsComponent,
    TeamsStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
