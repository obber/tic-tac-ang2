import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spinner',
  styleUrls: ['./spinner.component.scss'],
  template: `
    <div class="spinner"></div>
  `
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
