import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Registered Dietician Bergen County NJ – One of the Best Dieticians in NJ");
    this.meta.updateTag({ name: 'description', content: 'Body Positive Works has one of the best dieticians in Bergen County NJ. Specializing in emotional eating, overeating, binging, & food restricting. Individualized nutrition counseling. Addressing the mind & heart issues behind our relationship with food.' });
    this.meta.updateTag({ name: 'keywords', content: 'Registered Dietician, Dietician, Nutritionist, Nutritionist near you, Nutritionist nj, Nutritionist bergen county nj, Best nutritionist in nj, Top nutritionists in nj, Best nutritionist in bergen county, Nutrition services, Emotional eating, Overeating, Binge eating disorders' });
  }

  ngOnInit() {
  }

}
