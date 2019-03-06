import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrls: ['./our-mission.component.scss']
})
export class OurMissionComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {  
  this.titleService.setTitle("Body Positive Holistic Health & Wellness Center NJ - Bergen County");
  this.meta.updateTag({ name: 'description', content: 'We are body positive warriors, empowering your path to loving yourself. We treat anxiety, depression, negative body image, eating disorders & substance addiction. An army of Psychotherapists, Nutritionists, Massage, Yoga, Pilates & more. Explore, grow, & feel empowered with our integrated services, programs & classes.' }); 
  this.meta.updateTag({ name: 'keywords', content: 'Anxiety, Depression, Negative body image, Eating disorders, Substance addiction, Psychotherapist, Nutritionist, Massage, Yoga, Pilates, Chiropractor' });
 }

  ngOnInit() {
  }

}
