import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';

import { Globals } from '../../globals';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


declare var require: any;
declare var $: any;

@Component({
  selector: 'app-Article',
  templateUrl: './Article.component.html',
  styleUrls: ['./Article.component.scss']
})

export class ArticleComponent implements OnInit {

  schema = {};

  faTags = faTag;
  faChevronDown = faAngleDoubleLeft;
  public urlpic = '';
  public Backtitle = '';
  globals: Globals;
  public Blogarticles: any;
  public ArticlesID;

  public BlogTags = [];
  public constructor(private titleService: Title,private meta: Meta, private http: HttpClient, globals: Globals,private route: ActivatedRoute, private router: Router) {
    this.globals = globals;


    
  }
  ngOnInit(): void  {
     
    const moment = require('moment');  
    this.ArticlesID = this.route.snapshot.paramMap.get('id');
    this.http.get(this.globals.CMSURL + '/findCatFull?title=' + this.ArticlesID + '').subscribe((Articles) => this.Converter(Articles));

  }


  Converter(data: any){

    this.Blogarticles = data
     var showdown  = require('showdown');
     const moment = require('moment');    
     moment.locale(); 
     let converter = new showdown.Converter();
     for(let i = 0; i < data.length; i++){
 

      let url = this.globals.CMSURL  + data[i].image.url + 'thumbFull.png'
      let urlwep = this.globals.CMSURL  + data[i].image.url + 'thumbFull.webp'
      $(function() {
        $('.BackgroundReplacemnt').html("<picture> <source srcset='" + urlwep + "' type='image/webp'> <source srcset='" + url + "' type='image/png'><img src=" + url + " alt='Body Positivity Work' style='height: 144%;'></picture>");
        
      });
      this.Backtitle = data[i].title;
      data[i].description = converter.makeHtml(data[i].description);
      data[i].created_at  =   moment(data[i].StartDateTime).startOf('day').fromNow(); 
      for(let x = 0; x < data[i].blogtags.length; x++){
        if(this.BlogTags.indexOf(data[i].blogtags[x].tag) === -1) {
          this.BlogTags.push(data[i].blogtags[x].tag);
        }
      }
      this.meta.updateTag({ name: 'description', content: data[i].seodescription });
      this.meta.updateTag({ name: 'keywords', content: data[i].seotitle });
      this.titleService.setTitle(data[i].blogcategory.title + ' - ' + data[i].seotitle);
      if(!data[i].blogauthors){
        data[i].blogauthors = "";
      }
      

      this.schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id':  '/Article/' + data[i].title
        },
        'headline':  data[i].title,
        'description':  data[i].seotitle,
        'image': this.globals.CMSURL + data[i].image.url + 'thumbFull.png',
        'author': {
          '@type': 'Person',
          'name': data[i].blogauthors.name
        },
        'publisher': {
          '@type': 'Organization',
          'name': data[i].blogauthors.name,
          'logo': {
            '@type': 'ImageObject',
            'url': this.globals.CMSURL + data[i].image.url + 'thumbFull.png'
          }
        },
        'datePublished': moment(data[i].updated_at).format("L") ,
        'dateModified': moment(data[i].updated_at).format("L")
      };

     }
   
       



}





}

