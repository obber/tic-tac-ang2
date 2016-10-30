import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './queue/queue.component';
import { PlayComponent } from './play/play.component';
import { GameRoutingModule } from './game.routing-module';
import { GameService } from './game.service';
import { SharedComponentsModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    QueueComponent,
    PlayComponent
  ],
  providers: [
    GameService
  ]
})
export class GameModule { }
