import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-UseOurSpace',
  templateUrl: './Workshops.component.html',
  styleUrls: ['./Workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("BE THE SHIFT Workshops");
    this.meta.updateTag({ name: 'description', content: 'Bringing Education To Help Enhance Student’s Health (by) Informing Families (and) Teachers' });
    this.meta.updateTag({ name: 'keywords', content: 'Bringing Education To Help Enhance Student’s Health (by) Informing Families (and) Teachers' });
  }

  ngOnInit() {
  }

}
