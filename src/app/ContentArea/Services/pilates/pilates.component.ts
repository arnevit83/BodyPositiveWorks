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
  selector: 'app-pilates',
  templateUrl: './pilates.component.html',
  styleUrls: ['./pilates.component.scss']
})
export class PilatesComponent implements OnInit {


  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Holistic Pilates Bergen County NJ – Strength, Stability, Mobility");
    this.meta.updateTag({ name: 'description', content: 'Looking for Pilates? Try the modern way - Stott Pilates® at Body Positive Works. Strengthen your muscles, improve your postural alignment, flexibility & body awareness. Offering Stott Pilates mat classes. Stott Reformer classes. Other equipment includes the Chair for stability, and the Cadillac for mobility. ' });
    this.meta.updateTag({ name: 'keywords', content: 'Stott Pilates, Stott Reformer, Stott equipment, Pilates NJ, Pilates Ramsey NJ, Pilates place Franklin Lakes NJ, Pilates classes Bergen County NJ, Pilates Montvale NJ, Pilates Ridgewood NJ, Pilates studio Bergen County NJ, Pilates Bergen County NJ, Pilates studios in Bergen County NJ, Pilates classes NJ, Pilates studio NJ' });
  }
  ngOnInit() {
  }

}
