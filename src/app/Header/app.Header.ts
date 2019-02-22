import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'header',
  templateUrl: './header.html',
})
export class HeaderComponent {
  TitleText = 'THE FEEL GOOD PLACE';

  constructor(
    private router: Router,
  ) {
    // Add the Route Class
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const eventUrl = event.urlAfterRedirects.split(/[\s,]+/);
        var currentRoute = (eventUrl || ['THE FEEL GOOD PLACE']).join().replace('-', ' ').replace('-', ' ')
        if (currentRoute.split("/").slice(-1).toString() == ""){
        currentRoute="THE FEEL GOOD PLACE";
        }
        this.TitleText =currentRoute.split("/").slice(-1).toString() ;
      }
    });
  }
}
