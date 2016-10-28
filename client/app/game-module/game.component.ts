import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  styleUrls: ['./game.component.scss'],
  template: `
    <h1>Game Component</h1>
    <router-outlet></router-outlet>
  `
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
