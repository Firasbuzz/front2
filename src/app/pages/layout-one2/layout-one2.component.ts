import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-one2',
  templateUrl: './layout-one2.component.html',
  styleUrls: ['./layout-one2.component.scss']
})
export class LayoutOne2Component implements OnInit {

  constructor() { }
  currentSection = 'acceuil';

  sub_title: string = 'Your Growth';
  heading: string = 'Powering Business';
  sub_heading: string = 'Everywhere';
  content: string = 'Reprehenderit delectus provident atque aliquam numquam repellat harum facere quam eveniet vitae voluptatum eligendi optio amazing command.';

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
