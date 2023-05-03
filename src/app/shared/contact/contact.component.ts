import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
/**
 * Layout-1 contact component
 */
export class ContactComponent implements OnInit {

  // Form submition
  submit?: boolean;

  constructor() { }

  heading: string = "Contact Us";
  contact: string = "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common that of the individual languages.";

  ngOnInit(): void {   
  } 

}
