import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Schedule - Body positivity Works – Winner Bergen Magazine Readers’ Choice Awards");
    this.meta.updateTag({ name: 'description', content: 'Voted one of the best yoga studios in NJ, we host a wide range of yoga classes and types of yoga - from Kundalini Yoga to Kids Yoga to Restorative Yoga. In our Bergen yoga studio there’s no “right” way to do a yoga pose, and no judgment. We are body positive warriors (we also love cake), empowering and celebrating you.' });
    //   this.meta.updateTag({ name: 'keywords', content: 'Freelance copywriter,Copywriter,Brand strategist,SEO copywriting,Brand strategies,Book Author,Author,Yoga books,Yoga memoir,Yoga School Dropout,Yoga shop' });
  }
  ngOnInit() {
    $(function() {




      let doc = (<HTMLIFrameElement>document.getElementById('FileFrame')).contentDocument;
      doc.open();
      doc.write("<style>body{font-family: 'Open Sans', sans-serif;}</style><script type='text/javascript' src='https://widgets.healcode.com/javascripts/healcode.js'></script><healcode-widget data-type='schedules' data-widget-partner='object' data-widget-id='9594621ad99' data-widget-version='1' >Loading...</healcode-widget>");
      doc.close();


    });

  }
}
