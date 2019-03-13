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
  selector: 'app-bodywork',
  templateUrl: './bodywork.component.html',
  styleUrls: ['./bodywork.component.scss']
})
export class BodyworkComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Holistic Body Therapy Bergen NJ – Release Blockages & Restore Balance");
    this.meta.updateTag({ name: 'description', content: 'Integrative body therapy for Saddle River, Bergen County & Rockland. We offer SourcePoint Therapy® with the amazing Jody (Domerstad) Boisits. Locating and releasing energy blockages for optimum health. Specializing in anxiety, depression, negative body image, eating disorders, alcohol & drug addiction. Safe & joyful community.' });
    this.meta.updateTag({ name: 'keywords', content: 'Body therapy, Mind body therapy, Integrative body therapies, Sourcepoint therapy' });
  }

  ngOnInit() {
  }

}
