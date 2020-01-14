import { Component } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { Globals } from '../globals';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'nav',
  templateUrl: './Nav.html',
})
export class NavComponent {
  faCalendarAlt = faCalendarAlt;
  globals: Globals;
  categories: any;

  public constructor( private http: HttpClient, globals: Globals) {
    this.globals = globals;
  }
  

  ngOnInit(): void {
    this.http.get(this.globals.CMSURL + "/blogcategories")
    .subscribe((Categories) => this.categories = Categories );

    }



}


