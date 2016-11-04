import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SocketService } from '../../shared';
import { GameService } from '../game.service';

@Component({
  selector: 'app-play',
  styleUrls: ['./play.component.scss'],
  template: `
    <div class="col-md-6 col-md-offset-3">
      <h1>Game Component</h1>
      <div class="board">

      </div>
    </div>
  `
})
export class PlayComponent implements OnInit, AfterViewInit, OnDestroy {
  private socket : Observable<any>;
  private sub: Subscription;

  constructor(
    private socketService: SocketService,
    public gameState: GameService
  ) {}

  ngOnInit() {
    this.socket = this.socketService.get('game');
    // set up game related listeners
    this.sub = this.socket.subscribe(resp => {

    });
    // emit the gameId to connect
    this.socketService.connectToGame();
  }

  ngAfterViewInit() {
    // console.log('emitting client ready');
    // this.socketService.emit('client ready');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
