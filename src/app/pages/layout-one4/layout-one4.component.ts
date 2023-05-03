import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-one4',
  templateUrl: './layout-one4.component.html',
  styleUrls: ['./layout-one4.component.scss']
})
export class LayoutOne4Component implements OnInit {

  constructor() { }
  currentSection = 'home';

  sub_title: string = 'Welcome to';
  heading: string = 'Xolcy';
  content: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perspiciatis impedit nostrum reprehenderit soluta repudiandae doloribus iure, sequi  hic cum unde.';

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
