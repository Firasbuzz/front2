import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface content {
  image: string;
}

@Component({
  selector: 'app-layout-two5',
  templateUrl: './layout-two5.component.html',
  styleUrls: ['./layout-two5.component.scss']
})
export class LayoutTwo5Component implements OnInit {

  constructor(private modalService: NgbModal) { }
  currentSection = 'home';

  contents: string = "We help people to sell their products complete creating. A beautiful, modern, complete theme for building next generation websites.";
  contentData: content[] = [
    {
      image: 'assets/layout/images/hero-two-5-bg-11.jpg',
    },
    {
      image: 'assets/layout/images/hero-two-5-bg-22.jpg',
    },
    {
      image: 'assets/layout/images/hero-two-5-bg-33.jpg',
    }
  ];

  /**
   * owl carousel slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 1
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
   * Open modal
   * @param content content
   */
  openModal(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
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
