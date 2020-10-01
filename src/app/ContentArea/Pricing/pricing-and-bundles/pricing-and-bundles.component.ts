import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';
 
declare var paypal;
declare var $: any;

@Component({
  selector: 'app-pricing-and-bundles',
  templateUrl: './pricing-and-bundles.component.html',
  styleUrls: ['./pricing-and-bundles.component.scss']
})
export class PricingAndBundlesComponent implements OnInit {
  @ViewChild('paypal',) paypalElement: ElementRef;
  contactForm: FormGroup;
  constructor(private titleService: Title, private meta: Meta,private fb:FormBuilder) {    
    this.titleService.setTitle( "Pricing & Bundles - Body Positive Works, Saddle River, Bergen County" );
    this.meta.updateTag({ name: 'description', content: 'Holistic one stop health & wellness center. Feel good inside & out with our integrated services, programs & classes. Our licensed therapists, the best in NJ, specialize in anxiety, depression, negative body image, eating disorders, & substance addiction. Nutritionists, Psychotherapists, Massage, Yoga, Pilates & more.' });
    this.meta.updateTag({ name: 'keywords', content: 'Yoga NJ, Yoga Bergen County, Yoga Saddle River NJ, Chiropractor NJ, Chiropractor Bergen County, Nutritionist nj, Nutritionist bergen county nj, Psychotherapy NJ, Psychotherapy in Bergen County NJ, Massage places NJ, Massage Westfield NJ, Massage Fair Lawn NJ, Pilates NJ, Pilates classes Bergen County NJ' });
  }

  product = {
    price: 10,
    description: 'new student introductory special - 10 days for $40',
    img: '' 
  };
  countries = [
    { id: 1, name: "New Student Introductory Special" , price: 40 },
    { id: 2, name: "Single drop in class" , price: 25 },
    { id: 3, name: "Senior drop in class"  , price: 15 },
    { id: 4, name: "Pack of 5 classes"  , price: 110 },
    { id: 5, name: "Pack of 10 classes"  , price: 200 },
    { id: 6, name: "Pack of 20 classes"  , price: 360 },
  ];
  

  paidFor = false;
  selectedPay = false;


  ngOnInit() {

    $(function() {
    $('.ScrollPay').click(function() {
      $('html, body').animate({
        scrollTop: $(".pay").offset().top - 100 
      }, 'slow');
      return false;
    });
  });

    this.contactForm = this.fb.group({
      country: [null]
    });


    this.contactForm.get("country").valueChanges
    .subscribe(f => {
      this.product.price = this.countries.find(o => o.id === this.contactForm.get("country").value).price;
      this.product.description =  this.countries.find(o => o.id === this.contactForm.get("country").value).name;
      if(this.selectedPay == false){
        paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: this.product.description,
                    amount: {
                      currency_code: 'USD',
                      value: this.product.price
                    }
                  },
                ]
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              this.paidFor = true;
              console.log(order);
            },
            onError: err => {
              console.log(err);
            }
          })
          .render(this.paypalElement.nativeElement);}
      this.selectedPay = true;
      
    })
 


  }

}
