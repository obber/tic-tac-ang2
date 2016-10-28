import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { QueueComponent } from './queue/queue.component';
import { PlayComponent } from './play/play.component';

const gameRoutes: Routes = [
  {
    path: 'game',
    component: GameComponent,
    children: [
      {
        path: '',
        redirectTo: 'queue'
      },
      {
        path: 'play',
        component: PlayComponent
      },
      {
        path: 'queue',
        component: QueueComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(gameRoutes)],
  exports: [RouterModule],
  providers: []
})
export class GameRoutingModule { }
