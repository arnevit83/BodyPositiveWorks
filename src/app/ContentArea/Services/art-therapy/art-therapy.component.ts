import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

declare var $: any;

@Component({
  selector: 'app-art-therapy',
  templateUrl: './art-therapy.component.html',
  styleUrls: ['./art-therapy.component.scss']
})
export class ArtTherapyComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Yoga Bergen County NJ – Winner Bergen Magazine Readers’ Choice Awards");
    this.meta.updateTag({ name: 'description', content: 'Body Positive Works is proud to host one of the top nutritionists in Bergen County NJ. Specializing in emotional eating, overeating, binging, & food restricting. Individualized nutrition counseling. Addressing the mind & heart issues behind our relationship with food.  Safe & joyful community.' });
    this.meta.updateTag({ name: 'keywords', content: 'Nutritionist, Nutritionist near you, Nutritionist nj, Nutritionist bergen county nj, Best nutritionist in nj, Top nutritionists in nj, Best nutritionist in bergen county, Nutrition services, Emotional eating, Overeating, Binge eating disorders' });
  }

  ngOnInit() {


  }

}
