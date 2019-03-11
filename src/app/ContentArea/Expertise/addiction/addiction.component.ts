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
    this.titleService.setTitle("Licensed Holistic Addiction Specialists NJ – Integrated Treatments");
    this.meta.updateTag({ name: 'description', content: 'Looking for addiction treatment? Our highly qualified therapists are addiction specialists, serving NJ, Bergen County and Rockland County. Body Positive Works offers integrated addiction help in the form of services, programs and classes to support individuals on their journey to recovery.' });
    this.meta.updateTag({ name: 'keywords', content: 'Alcohol addiction treatment, Alcohol addiction help, Drug addiction treatment, Alcohol addiction help, Addiction therapist near you, Addiction specialist NJ, Addiction therapist NJ, NJ drug addiction help, Bergen County addiction recovery program, Drug and alcohol Counselor, Certified drug and alcohol Counselor, Certified drug and alcohol Counselor nj, Licensed drug and alcohol Counselor nj' });
  }

  ngOnInit() {

  }

}
