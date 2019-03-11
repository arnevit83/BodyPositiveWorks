import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-negative-body-image',
  templateUrl: './negative-body-image.component.html',
  styleUrls: ['./negative-body-image.component.scss']
})
export class NegativeBodyImageComponent implements OnInit {


  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Licensed Holistic Body Image Therapists NJ – Bergen County & Rockland");
    this.meta.updateTag({ name: 'description', content: 'Wondering what the solutions are to negative body image? Our licensed therapists specialize in body image issues, serving NJ, Bergen County and Rockland County. From psychotherapy to nutrition, yoga to meditation, Body Positive Works offers a holistic approach with integrated body positive services, programs and classes.' });
    this.meta.updateTag({ name: 'keywords', content: 'Best negative body image therapists, Self esteem therapist nearby, Body image therapy center, Self esteem therapist, Body image therapist, Body image issues, Body image and the media' });
  }


  ngOnInit() {
  }

}
