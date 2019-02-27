import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-addiction',
  templateUrl: './addiction.component.html',
  styleUrls: ['./addiction.component.scss']
})
export class AddictionComponent implements OnInit {


  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Holistic Addiction Specialists NJ - Bergen County and Rockland County.");
    this.meta.updateTag({ name: 'description', content: 'Looking for addiction treatment? Our highly qualified therapists are addiction specialists, serving NJ, Bergen County and Rockland County. Voted best in Bergen, Body Positive Works offers integrated addiction help in the form of services, programs and classes to support individuals on their journey to recovery.' });
    //   this.meta.updateTag({ name: 'keywords', content: 'Freelance copywriter,Copywriter,Brand strategist,SEO copywriting,Brand strategies,Book Author,Author,Yoga books,Yoga memoir,Yoga School Dropout,Yoga shop' });
  }

  ngOnInit() {

  }

}
