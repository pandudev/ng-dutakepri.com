import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'dutakepri';
  solidNavbar = false;
  onContact = false;

  constructor(private router: Router) {
    // af.database.list('/content/product/kredit');
  }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.solidNavbar = val.state.root.firstChild.data['solidNavbar'];
        this.onContact = val.state.root.firstChild.data['onContact'];
      }
    });
  }
}
