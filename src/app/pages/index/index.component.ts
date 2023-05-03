import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface pages {
  link: string;
  image: string;
  title: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

   year =  new Date().getFullYear();

  constructor(private router: Router) {
    /**
    * page-load demo css add
    */
    let path = this.router.url.split("/")[1];
    const navbar = document.getElementById('demo-css');
    if (navbar !== null) {
      navbar.setAttribute('href', 'assets/css/demo.css');
    }
  }

  heading: string = 'Xolcy';
  sub_title: string = 'Responsive Landing Page';
  layout1Title: string = 'Layout 1';
  allLauout1Pages: pages[] = [
    {
      link: '/layout-one-1',
      image: 'assets/images/demo/layout-one-1.png',
      title: 'INDEX-1'
    },
    {
      link: '/layout-one-2',
      image: 'assets/images/demo/layout-one-2.png',
      title: 'INDEX-2'
    },
    {
      link: '/layout-one-3',
      image: 'assets/images/demo/layout-one-3.png',
      title: 'INDEX-3'
    },
    {
      link: '/layout-one-4',
      image: 'assets/images/demo/layout-one-4.png',
      title: 'INDEX-4'
    },
    {
      link: '/layout-one-5',
      image: 'assets/images/demo/layout-one-5.png',
      title: 'INDEX-5'
    },
    {
      link: '/layout-one-6',
      image: 'assets/images/demo/layout-one-6.png',
      title: 'INDEX-6'
    }
  ];

  layout2Title: string = 'Layout 2';
  allLauout2Pages: pages[] = [
    {
      link: '/layout-two-1',
      image: 'assets/images/demo/layout-two-1.png',
      title: 'INDEX-1'
    },
    {
      link: '/layout-two-2',
      image: 'assets/images/demo/layout-two-2.png',
      title: 'INDEX-2'
    },
    {
      link: '/layout-two-3',
      image: 'assets/images/demo/layout-two-3.png',
      title: 'INDEX-3'
    },
    {
      link: '/layout-two-4',
      image: 'assets/images/demo/layout-two-4.png',
      title: 'INDEX-4'
    },
    {
      link: '/layout-two-5',
      image: 'assets/images/demo/layout-two-5.png',
      title: 'INDEX-5'
    },
    {
      link: '/layout-two-6',
      image: 'assets/images/demo/layout-two-6.png',
      title: 'INDEX-6'
    }
  ];

  ngOnInit(): void {
  }

}
