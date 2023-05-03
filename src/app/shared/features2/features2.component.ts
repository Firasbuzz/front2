import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features2',
  templateUrl: './features2.component.html',
  styleUrls: ['./features2.component.scss']
})
/**
 * Layout-2 features component
 */
export class Features2Component implements OnInit {

  constructor() { }

  title: string = "Modern & Powerful Interface";
  content: string = "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.";

  ngOnInit(): void {
  }

}
