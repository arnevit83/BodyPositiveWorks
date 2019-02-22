import { Component } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'BoPoWorksApp';
  bgClass = 'Home';
  faChevronDown = faChevronUp;

  constructor(
    private router: Router,
  ) {
    // Add the Route Class
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        const eventUrl = event.urlAfterRedirects.split(/[\s,]+/);
        var currentRoute = (eventUrl || ['Home']).join().replace('-', ' ').replace('-', ' ')
        if (currentRoute.split("/").slice(-1).toString() == ""){
        currentRoute="Home";
        }
        this.bgClass =currentRoute.split("/").slice(-1).toString() ;



      }
    });
  }
}
