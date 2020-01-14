import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { Globals } from '../../globals';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

declare var require: any;
declare var $: any;

@Component({
  selector: 'app-Blog',
  templateUrl: './Blog.component.html',
  styleUrls: ['./Blog.component.scss']
})
export class BlogComponent {
  globals: Globals;

  public events: any;
  services: any;
  public departmentId;
  
  public constructor(private titleService: Title, private meta: Meta, private http: HttpClient, globals: Globals,private route: ActivatedRoute, private router: Router) {
    this.titleService.setTitle( "Blog" );
    this.meta.updateTag({ name: 'description', content: '' });
    this.meta.updateTag({ name: 'keywords', content: '' });
    this.globals = globals;
  }


  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.departmentId = id;

    });
  }



}
