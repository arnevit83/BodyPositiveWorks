import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-rent-our-space',
  templateUrl: './rent-our-space.component.html',
  styleUrls: ['./rent-our-space.component.scss']
})
export class RentOurSpaceComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {   this.titleService.setTitle("Event and Meeting Space Rental, Bergen County NJ");
  this.meta.updateTag({ name: 'description', content: 'We offer our beautiful heritage house in Bergen County NJ for event & meeting space rental. We are centrally located in the heart of Allendale, Saddle River with easy access to Rt. 17 & the Garden State Parkway, & on the border of Rockland County. Arrange an appointment to take a tour - we love showing off our space!' }); 
  this.meta.updateTag({ name: 'keywords', content: 'Event space rental NJ, Event and meeting space rentals Bergen county NJ, Event and meeting space rentals Saddle River' });
 }

  ngOnInit() {
  }

}
