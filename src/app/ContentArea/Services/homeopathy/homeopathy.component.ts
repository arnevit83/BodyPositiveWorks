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
  selector: 'app-homeopathy',
  templateUrl: './homeopathy.component.html',
  styleUrls: ['./homeopathy.component.scss']
})
export class HomeopathyComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Homeopathy New Jersey – Personalized Treatments. Welcoming Community.");
    this.meta.updateTag({ name: 'description', content: 'One of the best homeopaths in NJ. Holistic approach based on the needs of the individual. Homeopathic remedies prepared according to FDA recognized Homeopathic Pharmacopoeia. Specializing in homeopathy for fertility, allergies, colds and flu, depression and anxiety, headaches and weight loss. Individual consultations. Personalized treatments. ' });
    this.meta.updateTag({ name: 'keywords', content: 'Homeopathy,What is Homeopathy?,Homeopathy treatment,How homeopathy works,Homeopathy New Jersey,Best homeopath in NJ,Homeopathy for fertility,Homeopathy for allergies,Homeopathy for sore throat,Homeopathy for cold,Homeopathy for depression,Homeopathy for anxiety,Homeopathy for flu,Homeopathy for headache,Homeopathy for weight loss,Homeopathy for eczema,Homeopathy for sinus infection,Homeopathy for UTI,ADHD Homeopathy' });
  }

  ngOnInit() {
  }

}
