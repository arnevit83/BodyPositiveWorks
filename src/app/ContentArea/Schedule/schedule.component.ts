import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
declare var require: any;
declare var $: any;

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent  {
  faFilter = faFilter;
  public events: any;
  services: any;


  public constructor(private titleService: Title, private meta: Meta, private http: HttpClient) {
    this.titleService.setTitle( "Schedule - Body Positive Works, Saddle River, Bergen County" );
    this.meta.updateTag({ name: 'description', content: 'Holistic one stop health & wellness center. Feel good inside & out with our integrated services, programs & classes. Our licensed therapists, the best in NJ, specialize in anxiety, depression, negative body image, eating disorders, & substance addiction. Nutritionists, Psychotherapists, Massage, Yoga, Pilates & more.' });
    this.meta.updateTag({ name: 'keywords', content: 'Yoga NJ, Yoga Bergen County, Yoga Saddle River NJ, Chiropractor NJ, Chiropractor Bergen County, Nutritionist nj, Nutritionist bergen county nj, Psychotherapy NJ, Psychotherapy in Bergen County NJ, Massage places NJ, Massage Westfield NJ, Massage Fair Lawn NJ, Pilates NJ, Pilates classes Bergen County NJ' });

  }
  ngOnInit(): void {
    const moment = require('moment');   

    this.http.get("https://cms.bodypositiveworks.com/categories?events.id_gte=1&_sort=CategoryTitle:ASC&events.StartDateTime_gte=" + moment().format('YYYY-MM-DD'))
    .subscribe((services) => this.services = services );

    this.http.get("https://cms.bodypositiveworks.com/events?StartDateTime_gte=" + moment().format('YYYY-MM-DD') + "&_sort=StartDateTime:ASC")
    .subscribe((events) => this.Converter(events));
    }

  Converter(data: any){
      var showdown  = require('showdown');
      const moment = require('moment');   
      let converter = new showdown.Converter();
      for(let i = 0; i < data.length; i++){
       data[i].Description = converter.makeHtml(data[i].Description);
       data[i].EndDateTime  =  moment(data[i].EndDateTime).format("LT");  
       data[i].StartTime  =   moment(data[i].StartDateTime).format("LT");  
       data[i].StartDateTime  =moment(data[i].StartDateTime).format("LL");  
      }
    this.events = data
    require('readmore-js');
    $(function() {
      $('.EventDescription').readmore({ speed: 75, lessLink: '<a href="#">Hide Details</a>', moreLink: '<a href="#">View Details</a>' ,collapsedHeight: 28});
    });
  }
 filterForeCasts(filterVal: any) {
      if (filterVal == "all"){
        const moment = require('moment');     
          this.http.get("https://cms.bodypositiveworks.com/events?StartDateTime_gte=" + moment().format('YYYY-MM-DD') + "&_sort=StartDateTime:ASC")
          .subscribe((events) => this.Converter(events));
      }else{
        const moment = require('moment');     
        this.http.get("https://cms.bodypositiveworks.com/events?StartDateTime_gte=" + moment().format('YYYY-MM-DD') + "&categories.CategoryTitle=" + filterVal +  "&_sort=StartDateTime:ASC")
        .subscribe((events) => this.Converter(events));
      }
  }
 
}
