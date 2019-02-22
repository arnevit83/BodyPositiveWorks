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
    	$.getScript("https://widgets.healcode.com/javascripts/healcode.js", function() {  });
    });

}
}
