import { Component, OnInit } from '@angular/core';

interface list{
  image:string;
  title:string;
  count:number;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
/**
 * Layout-1 portfolio component
 */
export class PortfolioComponent implements OnInit {

  constructor() { }

  portfolioList: list[] = [
    {
      image:'assets/layout/images/counter-img-1.png',
      title:'Projects Done',
      count:2570
    },
    {
      image:'assets/layout/images/counter-img-2.png',
      title:'Awards Wins',
      count:300
    },
    {
      image:'assets/layout/images/counter-img-3.png',
      title:'Happy Clients',
      count:4500
    },
    {
      image:'assets/layout/images/counter-img-4.png',
      title:'Country',
      count:270
    }
  ];
  
  ngOnInit(): void {
  }

}
