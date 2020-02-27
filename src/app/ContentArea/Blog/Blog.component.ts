import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
//import {startWith} from 'rxjs/operators'

import { Globals } from '../../globals';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { faTag } from '@fortawesome/free-solid-svg-icons';
declare var require: any;
declare var $: any;
//const CACHE_KEY = 'HttpBlogCat'


@Component({
  selector: 'app-Blog',
  templateUrl: './Blog.component.html',
  styleUrls: ['./Blog.component.scss']
})
export class BlogComponent {
  faTags = faTag;
  globals: Globals;
  public Blogarticles: any;
  public BlogFeatured: any;

  public BlogTags = [];
  public BlogcategoriesID;
  public BlogarticlesID;

  
  public constructor(private titleService: Title, private meta: Meta, private http: HttpClient, globals: Globals,private route: ActivatedRoute, private router: Router) {
    this.globals = globals;
  }
  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {

    this.BlogcategoriesID = params.get('id').split('-').join(' ');
    
    
    this.http.get(this.globals.CMSURL + "/findCat?blogcategory.title=" + this.BlogcategoriesID + "&_sort=created_at:ASC").subscribe((Blogarticles) => this.Converter(Blogarticles));

    this.http.get(this.globals.CMSURL + "/findFeaturedCat?featured=1&_sort=created_at:ASC").subscribe((BlogFeatured) => this.BlogFeaturedConverter(BlogFeatured));

 

  }); 

    


}
Converter(data: any){
  this.Blogarticles = data
   var showdown  = require('showdown');
   const moment = require('moment');    
   moment.locale(); 
   let converter = new showdown.Converter();
   for(let i = 0; i < data.length; i++){
    data[i].description = converter.makeHtml(data[i].description);




    //val = $showdown.makeHtml($sanitize(newValue));
    data[i].created_at  =   moment(data[i].created_at).startOf('day').fromNow(); 

    for(let x = 0; x < data[i].blogtags.length; x++){
      if(this.BlogTags.indexOf(data[i].blogtags[x].tag) === -1) {
        this.BlogTags.push(data[i].blogtags[x].tag);
      }
    }
  

   }

  if(this.Blogarticles.length > 0)  {
    this.meta.updateTag({ name: 'description', content: this.Blogarticles[0].blogcategory.seodescription });
    this.meta.updateTag({ name: 'keywords', content: this.Blogarticles[0].blogcategory.title });
    this.titleService.setTitle(this.Blogarticles[0].blogcategory.title);
  }else{
    this.titleService.setTitle( "Holistic Health & Wellness Center – Bergen County NJ" );
    this.meta.updateTag({ name: 'description', content: 'Holistic one stop health & wellness center. Feel good inside & out with our integrated services, programs & classes. Our licensed therapists specialize in anxiety, depression, negative body image, eating disorders, & substance addiction. Nutritionists, psychotherapists, massage, yoga, Pilates & more.' });
    this.meta.updateTag({ name: 'keywords', content: 'Yoga NJ, Yoga Bergen County, Yoga Saddle River NJ, Chiropractor NJ, Chiropractor Bergen County, Nutritionist nj, Nutritionist bergen county nj, Psychotherapy NJ, Psychotherapy in Bergen County NJ, Massage places NJ, Massage Westfield NJ, Massage Fair Lawn NJ, Pilates NJ, Pilates classes Bergen County NJ' });
}}
BlogFeaturedConverter(data: any){
 
   var showdown  = require('showdown');
   const moment = require('moment');    
   moment.locale(); 
   let converter = new showdown.Converter();
   for(let i = 0; i < data.length; i++){
   

    data[i].description = converter.makeHtml(data[i].description);
    //val = $showdown.makeHtml($sanitize(newValue));
    data[i].created_at  =   moment(data[i].created_at).startOf('day').fromNow(); 
   }
   this.BlogFeatured = data
 }


}
