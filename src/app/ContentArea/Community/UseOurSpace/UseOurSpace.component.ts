import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-UseOurSpace',
  templateUrl: './UseOurSpace.component.html',
  styleUrls: ['./UseOurSpace.component.scss']
})
export class UseOurSpaceComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Event and Meeting Space, Bergen County NJ");
    this.meta.updateTag({ name: 'description', content: 'Looking for an event or meeting space? Take a look at our beautiful heritage house at the heart of Saddle River, Bergen County NJ. We are centrally located with easy access to Rt. 17 & the Garden State Parkway, & on the border of Rockland County. Arrange an appointment to take a tour - we love showing off our home!' });
    this.meta.updateTag({ name: 'keywords', content: 'Event space NJ, Event and meeting space Bergen county NJ, Event and meeting space Saddle River' });
  }

  ngOnInit() {
  }

}
