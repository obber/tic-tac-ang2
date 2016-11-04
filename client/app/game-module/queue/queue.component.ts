import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SocketService } from '../../shared';

@Component({
  selector: 'app-queue',
  styleUrls: ['./queue.component.scss'],
  template: `
    <div class="col-md-12">
      <h1>{{loadingMessage}}</h1>
      <spinner></spinner>
    </div>
  `
})
export class QueueComponent implements OnInit, OnDestroy {
  private socket : Observable<any>;
  private sub: Subscription;
  public loadingMessage: string = 'Looking for an opponent...';

  constructor(
    private router: Router,
    private socketService: SocketService
  ) { }

  ngOnInit() {
    this.socket = this.socketService.get('queue');
    this.sub = this.socket.subscribe(({ action, payload }) => {
      switch (action) {
        case 'found':
          this.socketService.setId(payload.gameId);
          this.loadingMessage = 'Opponent found!';
          setTimeout(() => {
            this.router.navigate(['/game/play']);
          }, 2000);
          return;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
