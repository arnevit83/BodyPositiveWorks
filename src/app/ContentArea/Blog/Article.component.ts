import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { Globals } from '../../globals';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

declare var require: any;
declare var $: any;



@Component({
  selector: 'app-Article',
  templateUrl: './Article.component.html',
  styleUrls: ['./Article.component.scss']
})
export class ArticleComponent {
  globals: Globals;
  public Articles: any;
  public ArticlesID;

  
  public constructor(private titleService: Title,private meta: Meta, private http: HttpClient, globals: Globals,private route: ActivatedRoute, private router: Router) {
    this.globals = globals;


    
  }
  ngOnInit(): void  {

    const moment = require('moment');  
    this.ArticlesID = this.route.snapshot.paramMap.get('id');

    this.http.get(this.globals.CMSURL + "/blogarticles?title=" + this.ArticlesID + "").subscribe((Articles) => this.Converter(Articles));
  }


  Converter(data: any){
    this.Articles = data[0]
     var showdown  = require('showdown');
    // const moment = require('moment');    
    // moment.locale(); 
     let converter = new showdown.Converter();
     for(let i = 0; i < data.length; i++){
      data[i].description = converter.makeHtml(data[i].description);
    //  data[i].EndDateTime  =  moment(data[i].EndDateTime).format("LT");  
    //  data[i].StartTime  =   moment(data[i].StartDateTime).format("LT");  
    //  data[i].StartDateTime  =moment(data[i].StartDateTime).format("LL");  
     }
    this.meta.updateTag({ name: 'description', content: this.Articles.seodescription });
    this.meta.updateTag({ name: 'keywords', content: this.Articles.title });
    this.titleService.setTitle(this.Articles.blogcategory.title + " - " + this.Articles.title);


}



}
