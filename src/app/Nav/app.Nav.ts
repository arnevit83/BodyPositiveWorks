import { Component } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'nav',
  templateUrl: './Nav.html',
})
export class NavComponent {
  faCalendarAlt = faCalendarAlt;
}
