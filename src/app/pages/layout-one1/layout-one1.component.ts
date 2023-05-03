import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-one1',
  templateUrl: './layout-one1.component.html',
  styleUrls: ['./layout-one1.component.scss']
})

export class LayoutOne1Component implements OnInit {

  constructor() { }
  currentSection = 'home';

  heading: string = 'Make The Best Landing';
  sub_heading: string = 'in The Market';

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
