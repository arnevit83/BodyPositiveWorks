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
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.scss']
})
export class YogaComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Yoga Bergen County NJ – Winner Bergen Magazine Readers’ Choice Awards");
    this.meta.updateTag({ name: 'description', content: 'Voted the best yoga in Bergen by readers of Bergen Magazine, we host a range of yoga classes & types of yoga - from Kundalini Yoga to Kids Yoga to Yin Yoga. In our yoga studio there’s no “right” way to do a yoga pose & no judgment. We are body positive warriors (we also love cake), empowering & celebrating you.' });
    this.meta.updateTag({ name: 'keywords', content: 'Yoga, Yoga classes NJ, Yoga NJ, Best yoga studios in NJ, Yoga Bergen County, Yoga Bergen County NJ, Yoga Saddle River NJ, Yoga in Bergen County New Jersey, Yoga Allendale NJ, Yoga classes in Bergen County, Kundalini yoga, Curvy Yoga' });
  }

  ngOnInit() {

  }

}
