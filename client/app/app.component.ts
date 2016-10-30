import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-nav></app-nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private http: Http) {}

  ngOnInit() {

    // this.http.get('/api/hello')
    //   .map(resp => resp.json())
    //   .subscribe(resp => {
    //     console.log('resp = ', resp);
    //   });
  }
}
