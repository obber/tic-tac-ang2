import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { SocketService } from '../../shared';

@Component({
  selector: 'app-queue',
  styleUrls: ['./queue.component.scss'],
  template: `
    <div class="col-md-12">
      <h1>Looking for an opponent...</h1>
      <spinner></spinner>
    </div>
  `
})
export class QueueComponent implements OnInit, OnDestroy {
  private socket : Observable<any>;
  private sub: Subscription;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socket = this.socketService.get('queue');
    this.sub = this.socket.subscribe(resp => console.log(resp));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
