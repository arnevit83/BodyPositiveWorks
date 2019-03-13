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
  selector: 'app-ayurveda',
  templateUrl: './ayurveda.component.html',
  styleUrls: ['./ayurveda.component.scss']
})
export class AyurvedaComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Holistic Ayurveda Bergen County NJ – Heal & Harmonize");
    this.meta.updateTag({ name: 'description', content: 'Feeling stressed, anxious, out of balance? Restore harmony with an Ayurvedic diet plan right here in Bergen County. Learn to tune in to your feelings, honor your desires, and create harmony in your body, mind, and soul. Specializing in anxiety, depression, negative body image, eating disorders, & substance addiction.' });
    this.meta.updateTag({ name: 'keywords', content: 'Ayurveda near you, Ayurveda NJ, Ayurveda Bergen County NJ, Ayurveda diet plan, Ayurveda for diabetes, Ayurveda for pregnancy, Ayurveda for eczema, Ayurveda for PCOS, Ayurveda for depression, Ayurveda for anxiety, Ayurveda for thyroid, Ayurveda for high blood pressure, Ayurveda for menopause hot flashes' });
  }
  ngOnInit() {
  }

}
