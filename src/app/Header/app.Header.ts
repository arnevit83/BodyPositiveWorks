import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'header',
  templateUrl: './header.html',
})
export class HeaderComponent {
  TitleText = '';
  TitleSubText = '';
  constructor(
    private router: Router,
  ) {
    // Add the Route Class
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const eventUrl = event.urlAfterRedirects.split(/[\s,]+/);
        var currentRoute = (eventUrl || ['THE FEEL GOOD PLACE']).join().split("?")[0]

        if (currentRoute === "/"){
          this.TitleSubText = "The Feel Good Place";
        }else{
          this.TitleSubText = 'Body Positive Works'
        }

        if (currentRoute.split("/").slice(-1).toString() == ""){
        currentRoute="Body Positive Works";
        }

        if (currentRoute.split("/").slice(-2).toString() == ""){
          currentRoute="Body Positive Works";
        }

        this.TitleText = replaceAll('%20', ' ',replaceAll('-', ' ',currentRoute.split("/").slice(-1).toString()));
    
      }
      function replaceAll(find, replace, str)
      {
        while( str.indexOf(find) > -1)
        {
         str = str.replace(find, replace);
        }
       return str;
      }
    });
  }
}
