import { Component, OnInit } from '@angular/core';

interface list{
  icon:string;
  content:string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
/**
 * Layout-1 features component
 */
export class FeaturesComponent implements OnInit {

  constructor() { }

  sub_title:string = 'Features';
  title:string = 'Modern & Powerful Interface';
  content:string = "In an ideal world this website wouldn’t exist, a client would acknowledge the importance design starts.";
  featureList: list[] = [
    {
      icon:'activity',
      content:'Strategy Solution'
    },
    {
      icon:'credit-card',
      content:'Easy to Customize'
    }
  ];

  ngOnInit(): void {
  }

}
