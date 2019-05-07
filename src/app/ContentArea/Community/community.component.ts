import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {     
  this.titleService.setTitle( "Treat BoPoWorks as your sanctuary… a place to unplug, pause & laugh." );
  this.meta.updateTag({ name: 'description', content: 'Holistic health & wellness center with a welcoming & joyous community at its heart. Feel good inside & out with our integrated services, programs, classes, & community activities. Meet up after class. Have a cup of tea in our Lila Lounge. Join our book club. Or just enjoy being in a space that enables you to be you.' });
  this.meta.updateTag({ name: 'keywords', content: 'Yoga NJ, Yoga Bergen County, Yoga Saddle River NJ, Chiropractor NJ, Chiropractor Bergen County, Nutritionist nj, Nutritionist bergen county nj, Psychotherapy NJ, Psychotherapy in Bergen County NJ, Massage places NJ, Massage Westfield NJ, Massage Fair Lawn NJ, Pilates NJ, Pilates classes Bergen County NJ' });
}

  ngOnInit() {
  }

}
