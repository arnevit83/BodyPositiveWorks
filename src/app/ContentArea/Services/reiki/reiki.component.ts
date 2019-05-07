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
  selector: 'app-reiki',
  templateUrl: './reiki.component.html',
  styleUrls: ['./reiki.component.scss']
})
export class ReikiComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Reiki Therapy in Bergen County NJ - Relax, Release and Heal");
    this.meta.updateTag({ name: 'description', content: 'Our Reiki Master is one of the best in Bergen County. We use reiki to accelerate the body’s natural ability to relax, de-stress and heal on all levels – physical, mental, emotional & spiritual. We specialize in anxiety, depression, negative body image, eating disorders, & substance addiction. Welcoming joyous community.' });
    this.meta.updateTag({ name: 'keywords', content: 'Reiki near you, Reiki NJ, Reiki masters in NJ, Reiki classes NJ, Reiki Bergen County NJ, Reiki treatments, Reiki session' });
  }

  ngOnInit() {
  }

}
