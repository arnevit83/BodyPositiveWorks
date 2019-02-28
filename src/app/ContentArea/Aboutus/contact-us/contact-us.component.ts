import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

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
export class ContactUsComponent {

  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faMapMarkedAlt = faMapMarkedAlt;

  registerForm: FormGroup;
  submitted = false;

  public constructor(private titleService: Title, private meta: Meta,private formBuilder: FormBuilder) {
    this.titleService.setTitle("Contact Us - Body positivity Works – Winner Bergen Magazine Readers’ Choice Awards");
    this.meta.updateTag({ name: 'description', content: 'Voted one of the best yoga studios in NJ, we host a wide range of yoga classes and types of yoga - from Kundalini Yoga to Kids Yoga to Restorative Yoga. In our Bergen yoga studio there’s no “right” way to do a yoga pose, and no judgment. We are body positive warriors (we also love cake), empowering and celebrating you.' });
    //   this.meta.updateTag({ name: 'keywords', content: 'Freelance copywriter,Copywriter,Brand strategist,SEO copywriting,Brand strategies,Book Author,Author,Yoga books,Yoga memoir,Yoga School Dropout,Yoga shop' });
  }
  ngOnInit() {
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

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}


}
