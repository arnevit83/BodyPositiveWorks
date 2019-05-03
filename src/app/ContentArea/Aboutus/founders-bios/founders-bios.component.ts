import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-founders-bios',
  templateUrl: './founders-bios.component.html',
  styleUrls: ['./founders-bios.component.scss']
})
export class FoundersBiosComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {  
  this.titleService.setTitle("Meet BoPo’s Co-Founders – Jen Kraft & Melanie Struble");
  this.meta.updateTag({ name: 'description', content: 'Meet yoga teacher Jen Kraft and psychotherapist Melanie Struble – co-founders of BoPoWorks and certified experts in the treatment of adolescents, adults and families dealing with depression, anxiety, eating disorders, negative body image, alcohol and drug addiction, and stage of life issues.' }); 
  this.meta.updateTag({ name: 'keywords', content: 'Psychotherapist, Yoga Teacher, Eating Disorder, Depression, Anxiety, Negative body image, alcohol and drug addiction' });
}

  ngOnInit() {
  }

}
