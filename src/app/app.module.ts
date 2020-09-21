import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// MDB Angular Pro

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
