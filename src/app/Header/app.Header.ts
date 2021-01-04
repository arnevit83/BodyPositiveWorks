import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare var $: any;


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

      $(function() {

        if($('.BackgroundReplacemnt').html() !== "<picture><source srcset=\"/assets/images/bg4.webp\" type=\"image/webp\" style=\"display: block;\"><source srcset=\"/assets/images/bg4.png\" type=\"image/png\" style=\"display: block;\"><img alt=\"Body Positivity Work\" src=\"/assets/images/bg4.png\" style=\"display: block; height: 100%;\"></picture><picture><source srcset=\"/assets/images/bg3.webp\" type=\"image/webp\" style=\"display: block;\"><source srcset=\"/assets/images/bg3.png\" type=\"image/png\" style=\"display: block;\"><img alt=\"Body Positivity Work\" src=\"/assets/images/bg3.png\" style=\"display: block; height: 176%;\"></picture><picture><source srcset=\"/assets/images/bg2.webp\" type=\"image/webp\" style=\"display: block;\"><source srcset=\"/assets/images/bg2.png\" type=\"image/png\" style=\"display: block;\"><img alt=\"Body Positivity Work\" src=\"/assets/images/bg2.png\" style=\"display: block; height: 100%;\"></picture><picture><source srcset=\"/assets/images/bg1.webp\" type=\"image/webp\" style=\"display: block;\"><source srcset=\"/assets/images/bg1.png\" type=\"image/png\" style=\"display: block;\"><img alt=\"Body Positivity Work\" src=\"/assets/images/bg1.png\" style=\"height: 144%; display: block;\"></picture>"){
          $('.BackgroundReplacemnt').html("<picture><source srcset=\"/assets/images/bg4.webp\" type=\"image/webp\" style=\"display: block;\"><source srcset=\"/assets/images/bg4.png\" type=\"image/png\" style=\"display: block;\"><img alt=\"Body Positivity Work\" src=\"/assets/images/bg4.png\" style=\"display: block; height: 100%;\"></picture><picture><source srcset=\"/assets/images/bg3.webp\" type=\"image/webp\" style=\"display: block;\"><source srcset=\"/assets/images/bg3.png\" type=\"image/png\" style=\"display: block;\"><img alt=\"Body Positivity Work\" src=\"/assets/images/bg3.png\" style=\"display: block; height: 176%;\"></picture><picture><source srcset=\"/assets/images/bg2.webp\" type=\"image/webp\" style=\"display: block;\"><source srcset=\"/assets/images/bg2.png\" type=\"image/png\" style=\"display: block;\"><img alt=\"Body Positivity Work\" src=\"/assets/images/bg2.png\" style=\"display: block; height: 100%;\"></picture><picture><source srcset=\"/assets/images/bg1.webp\" type=\"image/webp\" style=\"display: block;\"><source srcset=\"/assets/images/bg1.png\" type=\"image/png\" style=\"display: block;\"><img alt=\"Body Positivity Work\" src=\"/assets/images/bg1.png\" style=\"height: 144%; display: block;\"></picture>");
          window.setTimeout(function() {
            $("#SliderBanner").children().children().children().css("display", "block");
          }, 100);
        }
  
               
      });



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
   
       
        if (currentRoute.toString() == "/Services/Workshops"){
          currentRoute="BE THE SHIFT";
          this.TitleSubText = 'Workshops'
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
