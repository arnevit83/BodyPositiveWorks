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
    this.titleService.setTitle("Contact Us – Body Positive Works, Saddle River, Bergen County ");
    this.meta.updateTag({ name: 'description', content: 'Our home is a fully renovated historic building in the center of Saddle River, Bergen County, New Jersey. Centrally located with convenient access to Rt. 17 and the Garden State Parkway, and on the border of Rockland County. Drop in, call us or send us a message. We’d love to hear from you.' });
    this.meta.updateTag({ name: 'keywords', content: 'Saddle River, Bergen County, New Jersey, Rockland County' });
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
          $("#contactusbutton").val("We will be in touch shortly");
         });
          
      },
      err => {
        console.log("Error occured");
      }
    );
    
      
    


}


}
