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
  selector: 'app-chiropractic',
  templateUrl: './chiropractic.component.html',
  styleUrls: ['./chiropractic.component.scss']
})
export class ChiropracticComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Licensed Chiropractor Serving Bergen County & Rockland County");
    this.meta.updateTag({ name: 'description', content: 'Natural, drug free pain relief for adults, teens and children from one of the best holistic chiropractors in Bergen NJ; Dr. Victoria Dubin Master. Treating sciatica, neck pain, scoliosis, lower back pain, headaches, frozen shoulder and much more the gentle way – no pushing, pulling, or popping.' });
    this.meta.updateTag({ name: 'keywords', content: 'Best chiropractor NJ, Best chiropractors in NJ, Chiropractor NJ, Chiropractor Montclair NJ, Physical therapy Bergen County NJ, Physical therapy Bergen County, Chiropractor Bergen County, Chiropractor Bergen County NJ, Physical therapy Closter NJ, Bergen physical therapy, Montvale chiropractor' });
  }
  ngOnInit() {
  }

}
