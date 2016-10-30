import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { environment as env } from '../../environments/environment';

@Injectable()
export class SocketService {
  private name: String;
  private host: String = env.socketUrl;
  private socket: SocketIOClient.Socket;

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
        return () => {
          console.log('closing');
          this.socket.close();
        };
      });

    // game socket observable
    } else if (this.name === 'game') {
      return Observable.create((observer: any) => {
        return () => this.socket.close();
      });
    }
  }

  private connect() {
    console.log(`Connected to ${this.name}`);
    // emit any initial signals here
  }

  private disconnect() {
    console.log(`Disconnected from ${this.name}`);
  }

}
