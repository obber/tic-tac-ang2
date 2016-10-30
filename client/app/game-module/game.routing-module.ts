import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueueComponent } from './queue/queue.component';
import { PlayComponent } from './play/play.component';

const gameRoutes: Routes = [
  {
    path: 'game',
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
