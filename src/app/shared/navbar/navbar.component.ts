import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  @Input() isSolid = false;
  isNavOpen = false;

  constructor() { }

  ngOnInit() {
  }

  navToggle() {
    this.isNavOpen = !this.isNavOpen;
  }

}
