import {Component} from '@angular/core';
import * as $ from 'jquery';
import { subirAnimation} from '../../animations/listanim.animations';


@Component({
  selector: 'app-princroot',
  templateUrl: './appprinc.component.html',
  animations: [subirAnimation]
})
export class AppprincComponent {

  constructor() {
  }

  sidebarActive: boolean;
  menuHorizontal: boolean;

  onMenuButtonClick(event: Event): void {
    this.sidebarActive = !this.sidebarActive;
    event.preventDefault();
  }

  sidebarAc(): boolean  {
  if (!$('#princ').hasClass('layout-static-inactive') || $('#princ').hasClass('layout-mobile-active')){
    return true;
  }
  else {
    return false;
  }
}

  isDesktop(): boolean  {
    return window.innerWidth > 1024;
  }
  onMaskClick(event: Event): void {
    this.sidebarActive = !this.sidebarActive;
    if (this.sidebarActive) {
      $('#princ').addClass('layout-overlay-active');
      $('#divmask').addClass('disblock');
    } else {
      $('#princ').removeClass('layout-overlay-active');
      $('#divmask').removeClass('disblock');
    }
    event.preventDefault();
  }

}
