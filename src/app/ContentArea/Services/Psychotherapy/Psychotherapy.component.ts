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
  selector: 'app-Psychotherapy',
  templateUrl: './Psychotherapy.component.html',
  styleUrls: ['./Psychotherapy.component.scss']
})
export class PsychotherapyComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Holistic Psychotherapists Bergen NJ – Individuals, Groups and Families");
    this.meta.updateTag({ name: 'description', content: 'Our psychotherapists have the highest licensure for Psychotherapy in NJ. Holistic approach with a variety of therapy counseling services under one roof. Specializing in anxiety, depression, negative body image, eating disorders, & substance addiction. Individual counseling, family and groups. Welcoming joyful community.' });
    this.meta.updateTag({ name: 'keywords', content: 'Psychotherapy, Psychotherapist, Psychotherapy in NJ, Psychotherapy in Bergen County NJ, Therapy near you, Therapy offices, Therapy centers, Therapy places, Therapy, Therapist' });
  }

  ngOnInit() {
  }

}
