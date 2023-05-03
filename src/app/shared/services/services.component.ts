import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface list{
  icon:string;
  title:string;
  content:string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
/**
 * Layout-1 services component
 */
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }

  heading:string = 'séminaires';
  content:string = '';
  serviceList: list[] = [
    {
      icon:'alert-octagon',
      title:'Awesome Support',
      content:"Some quick example text to build on the card title and make up the bulk of the card's content platform."
    },
    {
      icon:'droplet',
      title:'Dynamic Growth',
      content:"Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt."
    },
    {
      icon:'minimize',
      title:'Branding Identity',
      content:"Separated they live in Bookmarksgrove right at the coast of the Semantics, and large language ocean neary."
    },
    {
      icon:'message-circle',
      title:'Solutions Business',
      content:"It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World."
    },
    {
      icon:'copy',
      title:'Digital Design',
      content:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon:'shield',
      title:'Goal Business',
      content:"Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia."
    }
  ];

  ngOnInit(): void {
    let path = this.router.url.split("/")[1];
    if (path === 'layout-one-1') {
      const navbar1 = document.getElementById('services');
      if (navbar1 !== null) {
        navbar1.classList.add('service-layout-1');
      }
    }
  }

}
