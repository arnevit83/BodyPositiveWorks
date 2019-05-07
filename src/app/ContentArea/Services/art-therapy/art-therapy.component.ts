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
    this.titleService.setTitle("Licensed Art Therapy Serving Bergen County & Rockland County");
    this.meta.updateTag({ name: 'description', content: 'Individualized Art Therapy sessions with our licensed Art Therapist. Helping children, teens, and adults relieve stress, anxiety and depression, unlock deeply held emotions, address trauma and PTSD, improve self-esteem, manage addictions, and cope with a variety of conditions from autism to mental illness.' });
    this.meta.updateTag({ name: 'keywords', content: 'Nutritionist, Nutritionist near you, Nutritionist nj, Nutritionist bergen county nj, Best nutritionist in nj, Top nutritionists in nj, Best nutritionist in bergen county, Nutrition services, Emotional eating, Overeating, Binge eating disorders' });
  }

  ngOnInit() {


  }

}
