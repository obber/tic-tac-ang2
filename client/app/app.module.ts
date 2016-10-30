import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SocketService } from './shared';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedComponentsModule } from './shared';
import { GameModule } from './game-module/game.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    GameModule,
    SharedComponentsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TutorialComponent
  ],
  providers: [
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
