import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { QueueComponent } from './queue/queue.component';
import { PlayComponent } from './play/play.component';
import { GameRoutingModule } from './game.routing-module';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [GameComponent, QueueComponent, PlayComponent]
})
export class GameModule { }
