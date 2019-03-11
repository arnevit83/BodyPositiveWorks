import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-anxiety',
  templateUrl: './anxiety.component.html',
  styleUrls: ['./anxiety.component.scss']
})
export class AnxietyComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Licensed Holistic Anxiety Specialist NJ - Bergen County, Rockland County");
    this.meta.updateTag({ name: 'description', content: 'Wondering how to deal with anxiety? Our highly qualified therapists are specialists in how to treat anxiety, serving NJ, Bergen County and Rockland County. Body Positive Works offers integrated anxiety help in the form of services, programs and classes to support individuals holistically with a mind/body approach.' });
    this.meta.updateTag({ name: 'keywords', content: 'NJ anxiety specialists, Anxiety specialist NJ, Anxiety treatment centers NJ, Anxiety treatment NJ, Anxiety depression support groups NJ, Anxiety treatment NJ' });
  }

  ngOnInit() {
  }

}
