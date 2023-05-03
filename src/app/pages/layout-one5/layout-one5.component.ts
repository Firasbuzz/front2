import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-layout-one5',
  templateUrl: './layout-one5.component.html',
  styleUrls: ['./layout-one5.component.scss']
})

export class LayoutOne5Component implements OnInit {

  id = 'JlvxDa7Sges';
  private player: any;
  private ytEvent: any;
  constructor(private modalService: NgbModal) { }
  currentSection = 'home';

  sub_title: string = 'We Build Degital Products.';
  heading: string = "Take Your" + '\n' +  "Project To The Next" + '\n' + "Level";
  contents: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum sint qui beatae nemo maxime nulla cumque aut nobis.';

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
   * Open modal
   * @param content content
   */
  openModal(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
  onStateChange(event: any) {
    this.ytEvent = event.data;
  }
  savePlayer(player: any) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
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
