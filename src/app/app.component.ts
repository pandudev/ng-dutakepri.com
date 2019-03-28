import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dutakepri';
  navOpen = false;

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
