import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'Home',
  templateUrl: './Home.html',
})
export class HomeComponent {
    faChevronDown = faChevronDown;
    faPhone = faPhone;
    faEnvelope = faEnvelope;
    public constructor(private titleService: Title, private meta: Meta ) {
         this.titleService.setTitle( "Lucy Edge - Copywriter, SEO Copywriting, Brand Strategist" );
         this.meta.updateTag({ name: 'description', content: 'Need help defining your customer? Creating your brand purpose? Spreading your brand idea? ​I can help. I am a creative brand strategist, published book author and strategically focused freelance copywriter with SEO copywriting certification. I combine these skills to create brand strategies and stories that grow your business.' });
         this.meta.updateTag({ name: 'keywords', content: 'Freelance copywriter,Copywriter,Brand strategist,SEO copywriting,Brand strategies,Book Author,Author,Yoga books,Yoga memoir,Yoga School Dropout,Yoga shop' });
       }
}
