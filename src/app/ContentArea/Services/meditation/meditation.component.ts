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
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.scss']
})
export class MeditationComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Meditation Classes, Pranayama and Sound Healing, Bergen County NJ");
    this.meta.updateTag({ name: 'description', content: 'Our meditation teachers will teach you techniques including pranayama and sound healing, to help you develop an experience of inner peace, compassion & understanding. Act with equanimity, even when life goes pear shaped. Specializing in anxiety, depression, negative body image, eating disorders, & substance addiction.' });
    this.meta.updateTag({ name: 'keywords', content: 'Meditation, Meditation near you, Meditation classes Bergen County NJ, Meditation Bergen County, Meditation Bergen County NJ, Mindfulness meditation Bergen County NJ, Meditation center, Sound Healing, What is sound healing?, Sound healing benefits, Pranayama, What is pranayama?' });
  }
  ngOnInit() {

  }
}
