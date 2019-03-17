import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-depression',
  templateUrl: './depression.component.html',
  styleUrls: ['./depression.component.scss']
})
export class DepressionComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Licensed Holistic Depression Therapists NJ – Bergen County & Rockland");
    this.meta.updateTag({ name: 'description', content: 'Wondering how to deal with depression? Our licensed therapists are specialists in how to help someone with depression, serving NJ, Bergen County and Rockland County. Body Positive Works offers integrated depression help – from psychotherapy to yoga and meditation - to support individuals holistically with a mind/body approach.' });
    this.meta.updateTag({ name: 'keywords', content: 'Depression therapist near you, Depression support groups NJ, Depression rehab NJ, Therapists in NJ for depression, Depression treatment centers NJ, Depression centers in NJ, Depression counseling NJ, NJ depression specialists, Best depression therapists' });
  }

  ngOnInit() {
  }

}
