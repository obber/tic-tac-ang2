import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterLink } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GameModule } from './game-module/game.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    GameModule
  ],
  providers: [
    RouterLink
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
