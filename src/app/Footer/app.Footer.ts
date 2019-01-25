import { Component } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'footer',
  templateUrl: './footer.html',
})
export class FooterComponent {
    faChevronDown = faChevronUp;
}
