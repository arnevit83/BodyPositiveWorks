import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'Home',
  templateUrl: './Home.html',
  styleUrls: ['./Home.scss']
})
export class HomeComponent {
  public constructor(private titleService: Title, private meta: Meta) {
       this.titleService.setTitle( "Holistic Health & Wellness Center, NJ – Bergen County & Rockland" );
       this.meta.updateTag({ name: 'description', content: 'Holistic one stop health & wellness center. Feel good inside & out with our integrated services, programs & classes. Our licensed therapists, the best in NJ, specialize in anxiety, depression, negative body image, eating disorders, & substance addiction. Nutritionists, Psychotherapists, Massage, Yoga, Pilates & more.' });
       this.meta.updateTag({ name: 'keywords', content: 'Yoga NJ, Yoga Bergen County, Yoga Saddle River NJ, Chiropractor NJ, Chiropractor Bergen County, Nutritionist nj, Nutritionist bergen county nj, Psychotherapy NJ, Psychotherapy in Bergen County NJ, Massage places NJ, Massage Westfield NJ, Massage Fair Lawn NJ, Pilates NJ, Pilates classes Bergen County NJ' });
  }
}
