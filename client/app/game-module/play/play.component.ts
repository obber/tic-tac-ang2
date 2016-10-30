import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  styleUrls: ['./play.component.scss'],
  template: `
    <div class="col-md-6 col-md-offset-3">
      <h1>Game Component</h1>
    </div>
  `
})
export class PlayComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
