import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
/**
 * Layout-1,2 footer component
 */
export class FooterComponent implements OnInit {

  isVisible = false;
  cur_year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Onclick color change
   * @param theme theme color
   */
  setTheme(theme: any) {
    const navbar = document.getElementById('color-opt');
    if (navbar !== null) {
      navbar.setAttribute('href', 'assets/layout/css/colors/' + theme + '.css');
    }
  }

  toggleSwitcher() {
    this.isVisible = !this.isVisible;
  }

}
