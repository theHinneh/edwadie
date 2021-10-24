import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  deliveryContainer: any = [{
    image: 'assets/images/Scoot.svg',
    imageAlt: 'delivery',
    heading: 'Join our delivery partners',
    paragraph: "As a delivery driver, you'll make reliable money—working anytime, anywhere.",
    linkText: 'Start earning'
  },
    {
      image: 'assets/images/Storefront.svg',
      imageAlt: 'partner',
      heading: 'Become a Partner',
      paragraph: "Grow your business and reach new customers by partnering with us.",
      linkText: 'Sign up your store'
    },
    {
      image: 'assets/images/iphone.svg',
      imageAlt: 'delivery',
      heading: 'Try our services',
      paragraph: "Experience the best your neighborhood has to offer, all in one platform.",
      linkText: 'Get Started'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
