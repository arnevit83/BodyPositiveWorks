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
  selector: 'app-Shop',
  templateUrl: './Shop.component.html',
  styleUrls: ['./Shop.component.scss']
})
@Injectable()
export class ShopComponent {

  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faMapMarkedAlt = faMapMarkedAlt;

  registerForm: FormGroup;
  submitted = false;

  public constructor(private titleService: Title, private meta: Meta,private formBuilder: FormBuilder,private http: HttpClient) {
    this.titleService.setTitle("Shop with us – Body Positive Works, Saddle River, Bergen County ");
    this.meta.updateTag({ name: 'description', content: 'Our home is a fully renovated historic building in the center of Saddle River, Bergen County, New Jersey. Centrally located with convenient access to Rt. 17 and the Garden State Parkway, and on the border of Rockland County. Drop in, call us or send us a message. We’d love to hear from you.' });
    this.meta.updateTag({ name: 'keywords', content: 'Saddle River, Bergen County, New Jersey, Rockland County' });
  }
  ngOnInit() {

    
    (function () {

   


          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

   


          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }
         



      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        
        var client = window.ShopifyBuy.buildClient({
          domain: 'yogaclicks.myshopify.com',
          storefrontAccessToken: '4cda5861716efa4cc9ca2d61efe03624',
        });
        window.ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('collection', {
            id: '57772212323',
            node: document.getElementById('collection-component-1589804510845'),
            moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(33.33333% - 30px)",
              "margin-left": "30px",
              "margin-bottom": "50px",
              "width": "calc(33.33333% - 30px)"
            }
          },
          "title": {
            "font-weight": "normal"
          },
          "button": {
            "font-size": "14px",
            "padding-top": "15px",
            "padding-bottom": "15px",
            ":hover": {
              "background-color": "#b92053"
            },
            "background-color": "#ce235c",
            ":focus": {
              "background-color": "#b92053"
            },
            "border-radius": "4px",
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "14px",
            "padding-top": "15px",
            "padding-bottom": "15px"
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-30px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "14px",
            "padding-top": "15px",
            "padding-bottom": "15px",
            ":hover": {
              "background-color": "#b92053"
            },
            "background-color": "#ce235c",
            ":focus": {
              "background-color": "#b92053"
            },
            "border-radius": "4px",
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "14px",
            "padding-top": "15px",
            "padding-bottom": "15px"
          },
          "title": {
            "font-weight": "normal"
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "14px",
            "padding-top": "15px",
            "padding-bottom": "15px",
            ":hover": {
              "background-color": "#b92053"
            },
            "background-color": "#ce235c",
            ":focus": {
              "background-color": "#b92053"
            },
            "border-radius": "4px"
          }
        },
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#ce235c",
            ":hover": {
              "background-color": "#b92053"
            },
            ":focus": {
              "background-color": "#b92053"
            }
          },
          "count": {
            "font-size": "14px"
          }
        }
      }
    },
          });
        });
      }
    })();

  }



}
