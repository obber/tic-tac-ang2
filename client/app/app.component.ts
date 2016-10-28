import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';

import { environment as env } from '../environments/environment';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private http: Http) {}

  ngOnInit() {

    const socket = io.connect(env.socketUrl);

    // this.http.get('/api/hello')
    //   .map(resp => resp.json())
    //   .subscribe(resp => {
    //     console.log('resp = ', resp);
    //   });
  }
}
