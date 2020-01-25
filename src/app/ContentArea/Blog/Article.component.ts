import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { Globals } from '../../globals';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

declare var require: any;




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

    this.http.get(this.globals.CMSURL + '/findCat?title=' + this.ArticlesID + '').subscribe((Articles) => this.Converter(Articles));

    
    // $(function() {
    //   $('#SliderBanner  ').html("<picture><img src=Articles.image.url + 'thumbSmall.png' alt='Body Positivity Work' style='height: 144%;'></picture>");
    // });



  }


  Converter(data: any){
    this.Articles = data[0]
     var showdown  = require('showdown');
    // const moment = require('moment');    
    // moment.locale(); 
     let converter = new showdown.Converter();
     for(let i = 0; i < data.length; i++){
      data[i].description = converter.makeHtml(data[i].description);

     }
    this.meta.updateTag({ name: 'description', content: this.Articles.seodescription });
    this.meta.updateTag({ name: 'keywords', content: this.Articles.title });
    this.titleService.setTitle(this.Articles.blogcategory.title + ' - ' + this.Articles.title);


}



}
