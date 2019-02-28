import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


declare var $: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
@Injectable()
export class ContactUsComponent {

  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faMapMarkedAlt = faMapMarkedAlt;

  registerForm: FormGroup;
  submitted = false;

  public constructor(private titleService: Title, private meta: Meta,private formBuilder: FormBuilder,private http: HttpClient) {
    this.titleService.setTitle("Contact Us - Body positivity Works – Winner Bergen Magazine Readers’ Choice Awards");
    this.meta.updateTag({ name: 'description', content: 'Voted one of the best yoga studios in NJ, we host a wide range of yoga classes and types of yoga - from Kundalini Yoga to Kids Yoga to Restorative Yoga. In our Bergen yoga studio there’s no “right” way to do a yoga pose, and no judgment. We are body positive warriors (we also love cake), empowering and celebrating you.' });
    //   this.meta.updateTag({ name: 'keywords', content: 'Freelance copywriter,Copywriter,Brand strategist,SEO copywriting,Brand strategies,Book Author,Author,Yoga books,Yoga memoir,Yoga School Dropout,Yoga shop' });
  }
  ngOnInit() {
    $(function() {
            $(".form-control").focus(function(){
              $(this).parent().find('label').addClass("is-focused")
            $(this).parent().addClass("is-focused")
            }).blur(function(){
              if($(this).val() != ''){
                $(this).parent().find('label').removeClass("is-focused")
                $(this).parent().removeClass("is-focused").addClass("is-filled");
              }else{
                $(this).parent().find('label').removeClass("is-focused")
              }
     });
    });


    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        phone: ['', ],
        message: ['', ],
        email: ['', [Validators.required, Validators.email]],
    }, );
  }
 

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
  }
    const req = this.http.get('https://hooks.zapier.com/hooks/catch/4487884/pe50tf/?' + $.param(this.registerForm.value))
    .subscribe(
      res => {
     
        $(function(){
          $("#contactusbutton").attr("disabled", "disabled");
          $("#contactusbutton").val("We will be intouch shortly");
         });
          
      },
      err => {
        console.log("Error occured");
      }
    );
    
      
    


}


}
