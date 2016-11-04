import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { environment as env } from '../../environments/environment';

@Injectable()
export class SocketService {
  private name: String;
  private host: String = env.socketUrl;
  private socket: SocketIOClient.Socket;
  private gameId: String;

  constructor() { }

  // get returns an Observable of events streaming to and from {env.socketUrl/name}
  get(name: string) : Observable<any> {
    this.name = name;
    this.socket = io.connect(env.socketUrl + '/' + this.name);
    this.socket.on('connect', () => this.connect());
    this.socket.on('disconnect', () => this.disconnect());

    // queue socket observable
    if (this.name === 'queue') {
      return Observable.create((observer: any) => {
        this.socket.on('found', (payload: any) => observer.next({ action: 'found', payload: payload }));
        this.socket.on('server ready', (payload: any) => observer.next({ action: 'server ready', payload: payload }));
        return () => {
          console.log('closing');
          this.socket.close();
        };
      });

    // game socket observable
    } else if (this.name === 'game') {
      return Observable.create((observer: any) => {
        this.socket.on('start', (payload: any) => observer.next({ action: 'server ready', payload: payload }));
        this.socket.on('server turn over', (payload: any) => observer.next({ action: 'server turn over', payload: payload }));
        this.socket.on('game over', (payload: any) => observer.next({ action: 'server ready', payload: payload }));
        return () => this.socket.close();
      });
    }
  }

  connectToGame() {
    this.emit('connect to game', {
      gameId: this.gameId
    });
  }

  setId(gameId) {
    this.gameId = gameId;
  }

  emit(event, payload = {}) {
    this.socket.emit(event, payload);
  }

  private connect() {
    console.log(`Connected to ${this.name}`);
    // emit any initial signals here
  }

  private disconnect() {
    console.log(`Disconnected from ${this.name}`);
  }

}
