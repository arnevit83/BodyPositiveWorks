import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-eating-disorders',
  templateUrl: './eating-disorders.component.html',
  styleUrls: ['./eating-disorders.component.scss']
})
export class EatingDisordersComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Holistic Eating Disorder Treatment NJ – Bergen County & Rockland County");
    this.meta.updateTag({ name: 'description', content: 'Wondering how to treat an eating disorder? We are specialists in body image and eating disorders, serving NJ, Bergen County and Rockland County. Body Positive Works offers integrated eating disorder help – from psychotherapy to nutrition, yoga and meditation – providing holistic support with a mind/body approach.' });
    this.meta.updateTag({ name: 'keywords', content: 'Best eating disorder therapist in NJ, Eating disorder treatment near you, Eating disorder clinic, Eating disorder facilities, Eating disorder treatment centers, Local eating disorder clinics, Outpatient eating disorder treatment, Eating disorder treatment NJ, Eating disorder therapist NJ, Eating disorder psychiatrist NJ, Eating disorder therapist NJ' });
  }


  ngOnInit() {
  }

}
