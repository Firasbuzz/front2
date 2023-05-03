import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface content {
  name: string;
  sub_title: string;
  content: string;
  image: string;
  starRating: any;
}

@Component({
  selector: 'app-client2',
  templateUrl: './client2.component.html',
  styleUrls: ['./client2.component.scss']
})
/**
 * Layout-2 client component
 */
export class Client2Component implements OnInit {

  constructor() { }

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

  heading: string = 'à propos';
  content: string = "sisg est une site pour planification  de séminaire de institut supérieur de gestion gabes l'institut créé le 01/07/1998 par le décret N°468 du 23/02/1998 (J.O.R.T) du 03/03/1998 . pour plus d'information contactez 75 272 281 ou sur email isggb@isggb.run.tn  .";
  contentData: content[] = [
    {
      name: 'Jordan Dakin',
      sub_title: 'Web Designer',
      content: "I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.",
      image: 'assets/layout/images/user-1.png',
      starRating: 4
    },
    {
      name: 'Jordan Dakin',
      sub_title: 'Web Designer',
      content: "Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures Integer varius lacus non magna tempor congue natuasre the whole its beauty.",
      image: 'assets/layout/images/user-2.png',
      starRating: 5
    },
    {
      name: 'Jordan Dakin',
      sub_title: 'Web Designer',
      content: "Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures Integer varius lacus non magna tempor congue natuasre the whole its beauty.",
      image: 'assets/layout/images/user-3.png',
      starRating: 3
    },
  ];

  ngOnInit(): void {
  }

}
