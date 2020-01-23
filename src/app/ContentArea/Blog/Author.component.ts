import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
//import {startWith} from 'rxjs/operators'

import { Globals } from '../../globals';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

declare var require: any;
declare var $: any;
//const CACHE_KEY = 'HttpBlogCat'


@Component({
  selector: 'app-Author',
  templateUrl: './Author.component.html',
  styleUrls: ['./Author.component.scss']
})
export class AuthorComponent {
  globals: Globals;
  public BlogcategoriesAuthors: any;
  public BlogcategoriesID;
 // public BlogarticlesID;

  
  public constructor(private titleService: Title, private meta: Meta, private http: HttpClient, globals: Globals,private route: ActivatedRoute, private router: Router) {
    this.globals = globals;
  }
  ngOnInit() {
 


    this.route.paramMap.subscribe((params: ParamMap) => {

    this.BlogcategoriesAuthors = params.get('id');
    
    this.http.get(this.globals.CMSURL + "/blogarticles?blogauthors.name=" + this.BlogcategoriesAuthors + "&_sort=created_at:ASC").subscribe((Blogarticles) => this.Converter(Blogarticles));
   
    
    // this.Blogarticles.subscribe(next => {localStorage[CACHE_KEY] = JSON.stringify(next)})  
    // this.Blogarticles = this.Blogarticles.pipe(
    // startWith(JSON.parse(localStorage[CACHE_KEY] || '{}')))

  }); 

    


}
Converter(data: any){
  this.BlogcategoriesAuthors = data
   var showdown  = require('showdown');
   const moment = require('moment');    
   moment.locale(); 
   let converter = new showdown.Converter();
   for(let i = 0; i < data.length; i++){
    data[i].description = converter.makeHtml(data[i].description);
    //val = $showdown.makeHtml($sanitize(newValue));
    data[i].created_at  =   moment(data[i].StartDateTime).startOf('day').fromNow(); 
   }

  if(this.BlogcategoriesAuthors.length > 0)  {
    this.meta.updateTag({ name: 'description', content: this.BlogcategoriesAuthors[0].blogcategory.seodescription });
    this.meta.updateTag({ name: 'keywords', content: this.BlogcategoriesAuthors[0].blogauthors.name });
    this.titleService.setTitle(this.BlogcategoriesAuthors[0].blogauthors.name);
  }else{
    this.titleService.setTitle( "Holistic Health & Wellness Center – Bergen County NJ" );
    this.meta.updateTag({ name: 'description', content: 'Holistic one stop health & wellness center. Feel good inside & out with our integrated services, programs & classes. Our licensed therapists specialize in anxiety, depression, negative body image, eating disorders, & substance addiction. Nutritionists, psychotherapists, massage, yoga, Pilates & more.' });
    this.meta.updateTag({ name: 'keywords', content: 'Yoga NJ, Yoga Bergen County, Yoga Saddle River NJ, Chiropractor NJ, Chiropractor Bergen County, Nutritionist nj, Nutritionist bergen county nj, Psychotherapy NJ, Psychotherapy in Bergen County NJ, Massage places NJ, Massage Westfield NJ, Massage Fair Lawn NJ, Pilates NJ, Pilates classes Bergen County NJ' });
}



}

}
