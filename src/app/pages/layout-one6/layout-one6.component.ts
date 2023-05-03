import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface content {
  image: string;
}

@Component({
  selector: 'app-layout-one6',
  templateUrl: './layout-one6.component.html',
  styleUrls: ['./layout-one6.component.scss']
})

export class LayoutOne6Component implements OnInit {

  constructor() { }
  currentSection = 'home';

  heading: string = "Take Your" + "\n" + "Project To The Next" + "\n" + "Level";
  sub_heading: string = 'We Build Degital Products.';
  content: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum sint qui beatae nemo maxime nulla cumque aut nobis.';
  contentData: content[] = [
    {
      image: 'assets/layout/images/hero-one-6-slider1.jpg',
    },
    {
      image: 'assets/layout/images/hero-one-6-slider2.jpg',
    },
    {
      image: 'assets/layout/images/hero-one-6-slider3.jpg',
    }
  ];

  /**
   * owl carousel slider
   */
  customOptions: OwlOptions = {
    margin: 10,
    loop: true,
    items: 1,
    mouseDrag: true,
    autoWidth: true,
    autoplay: true,
    touchDrag: false,
    pullDrag: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1.5
      },
      600: {
        items: 1.5
      },
      900: {
        items: 1.5
      }
    },
    nav: false
  }

  ngOnInit(): void {
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      if (navbar !== null) {
        navbar.classList.add('nav-sticky');
      }
    }
    else {
      if (navbar !== null) {
        navbar.classList.remove('nav-sticky');
      }
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    const nav = document.getElementById('navbarNav');
    if (nav !== null) {
      nav.classList.toggle('show');
    }
  }

}
