import { Component, OnInit } from '@angular/core';

interface list {
  price: any;
  month: string;
  space: number;
  width: number;
  support: string;
  fees: string;
}

interface brand {
  image: string;
};

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
/**
 * Layout-1 pricing component
 */
export class PricingComponent implements OnInit {

  constructor() { }

  heading: string = 'Our Pricing';
  content: string = 'We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results.';
  pricingList: list[] = [
    {
      price: 'Free',
      month: 'Per Month',
      space: 500,
      width: 1.5,
      support: 'Yes',
      fees: 'No'
    },
    {
      price: '62',
      month: 'Per Month',
      space: 500,
      width: 1.5,
      support: 'Yes',
      fees: 'No'
    },
    {
      price: '299',
      month: 'Per Month',
      space: 500,
      width: 1.5,
      support: 'Yes',
      fees: 'No'
    }
  ];

  brandLogos: brand[] = [
    {
      image: 'assets/layout/images/brand-logo-1.png'
    },
    {
      image: 'assets/layout/images/brand-logo-2.png'
    },
    {
      image: 'assets/layout/images/brand-logo-3.png'
    },
    {
      image: 'assets/layout/images/brand-logo-4.png'
    }
  ];

  ngOnInit(): void {
  }

}
