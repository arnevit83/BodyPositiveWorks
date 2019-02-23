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
    this.titleService.setTitle("Yoga Bergen County NJ – Winner Bergen Magazine Readers’ Choice Awards");
    this.meta.updateTag({ name: 'description', content: 'Voted one of the best yoga studios in NJ, we host a wide range of yoga classes and types of yoga - from Kundalini Yoga to Kids Yoga to Restorative Yoga. In our Bergen yoga studio there’s no “right” way to do a yoga pose, and no judgment. We are body positive warriors (we also love cake), empowering and celebrating you.' });
    //   this.meta.updateTag({ name: 'keywords', content: 'Freelance copywriter,Copywriter,Brand strategist,SEO copywriting,Brand strategies,Book Author,Author,Yoga books,Yoga memoir,Yoga School Dropout,Yoga shop' });
  }

  ngOnInit() {
  }

}
