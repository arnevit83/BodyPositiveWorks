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
        const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
        const currentRoute = (eventUrl || ['THE FEEL GOOD PLACE']).join().replace('-', ' ').replace('-', ' ')
        this.TitleText = currentRoute.split("/").slice(-1).toString();
      }
    });
  }
}
