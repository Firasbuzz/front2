import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SeminaireService } from 'src/app/services/seminaire.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {
ok:boolean=true;
  FormData!: FormGroup;
  
change()
{
  this.ok=true 
}
onOkChanged(value: boolean) {
  this.ok = value;
}
  constructor(private modalService: NgbModal,private seminaireService:SeminaireService, private contact:ContactService ) 
  {  
  }
  onSubmit() {
    // Implement email sending logic here
  }
  currentSection = 'home';

  heading: string = "Séminaires De Institut Supérieur De Gestion Gabes ";

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
