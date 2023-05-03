import { Component, OnInit } from '@angular/core';
import { SlideInterface } from 'src/app/imageSlider/types/slide.interface';

interface list {
  title: string;
  content: string;
  price: any;
  space: number;
  width: number;
  support: string;
}

interface brand {
  image: string;
};

@Component({
  selector: 'app-pricing2',
  templateUrl: './pricing2.component.html',
  styleUrls: ['./pricing2.component.scss']
})
/**
 * Layout-2 pricing component
 */
export class Pricing2Component implements OnInit {

  constructor() { }

  heading: string = "Our Pricing";
  content: string = "Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.";
  pricingList: list[] = [
    {
      title: "Starter",
      content: "Casitamet consectetur adipisicing elit Fugiat dolorum magni.",
      price: 32,
      space: 500,
      width: 1.5,
      support: 'Yes'
    },
    {
      title: "Business",
      content: "Casitamet consectetur adipisicing elit Fugiat dolorum magni.",
      price: 199,
      space: 500,
      width: 1.5,
      support: 'Yes'
    },
    {
      title: "Enterprise",
      content: "Casitamet consectetur adipisicing elit Fugiat dolorum magni.",
      price: 299,
      space: 500,
      width: 1.5,
      support: 'Yes'
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

  performance_title: string = "Boost your performance";
  performance_content: string = "We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results."


  ngOnInit(): void {
  }

}
