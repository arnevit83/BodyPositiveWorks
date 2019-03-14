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
  selector: 'app-Massage',
  templateUrl: './Massage.component.html',
  styleUrls: ['./Massage.component.scss']
})
export class MassageComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Swedish Massage, Deep Tissue Massage, Reflexology – Bergen County NJ");
    this.meta.updateTag({ name: 'description', content: 'Some of the best massages in Bergen County. Choose Swedish massage, deep tissue massage, prenatal massage, aromatherapy or reflexology. Our massage helps balance the body both physically and emotionally. Specializing in massage for anxiety, depression, negative body image, eating disorders & substance addiction.' });
    this.meta.updateTag({ name: 'keywords', content: 'Best massage NJ, Massage near me, Massage NJ, Massage places NJ, Massage Westfield NJ, Massage Fair Lawn NJ, Lymphatic massage near me, Lymphatic drainage massage near me, Sports massage therapist near me' });
  }

  ngOnInit() {
  }

}
