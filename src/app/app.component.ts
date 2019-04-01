import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'dutakepri';
  solidNavbar = false;
  onContact = false;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.solidNavbar = val.state.root.firstChild.data['solidNavbar'];
        this.onContact = val.state.root.firstChild.data['onContact'];

      }
      console.log(this.solidNavbar);
    });
  }
}
