import { Component } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'footer',
  templateUrl: './footer.html',
})
export class FooterComponent {
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

}
