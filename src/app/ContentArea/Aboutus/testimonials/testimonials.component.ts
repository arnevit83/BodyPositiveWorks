import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  faStar = faStar;

  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Testimonials – Body Positive Works, Saddle River, Bergen County ");
    this.meta.updateTag({ name: 'description', content: 'Read testimonials for our holistic health & wellness center. Feel good inside & out with our integrated services, programs & classes. Our licensed therapists specialize in  anxiety, depression, negative body image, eating disorders & substance addiction. Nutritionists, psychotherapists, massage, yoga, Pilates & more.' });
    this.meta.updateTag({ name: 'keywords', content: 'Anxiety, Depression, Negative body image, Eating disorders, Substance addiction, Nutritionists, Psychotherapists, Massage, Yoga, Pilates' });
  }

  ngOnInit() {
  }

}
