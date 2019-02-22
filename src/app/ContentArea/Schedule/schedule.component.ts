import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){




      let doc = (<HTMLIFrameElement> document.getElementById('FileFrame')).contentDocument ;
      doc.open();
      doc.write('<script type="text/javascript" src="https://widgets.healcode.com/javascripts/healcode.js"></script>            <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="9594621ad99" data-widget-version="1" >Loading...</healcode-widget>');
      doc.close();


    });

}
}
