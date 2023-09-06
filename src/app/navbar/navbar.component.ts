import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  router:Router= new Router();
  @ViewChild('menuPTrigger', {static: false}) trigger2!: MatMenuTrigger;
  @ViewChild('menuTrigger', {static: false}) trigger!: MatMenuTrigger;
  recheckIfInMenu!: boolean;
  recheckIfInPMenu!: boolean;
  // flipped: boolean;
  ngOnInit() {
    this.recheckIfInMenu = false;
    this.recheckIfInPMenu = false;
    // this.flipped = false;
  }

  openResourceMenu() {
    this.trigger.openMenu();
  }

  closeResourceMenu() {
    setTimeout(() => {
      if (this.recheckIfInMenu === false) {
        this.trigger.closeMenu();
      }
    }, 50);
  }
  openPortfolioMenu()
  {
console.log(this.trigger)

    this.trigger2.openMenu();
  }
closePortfolioMenu(){
  setTimeout(() => {
    if (this.recheckIfInPMenu === false) {
      this.trigger2.closeMenu();
    }
  }, 200);
}



}
