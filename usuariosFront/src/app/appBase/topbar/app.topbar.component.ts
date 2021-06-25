import {Component, OnInit} from '@angular/core';
import {AppprincComponent} from '../princ/appprinc.component';
import {
  derAIzAnimation,
  IzADerAnimation
} from '../../animations/listanim.animations';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html', styleUrls: ['./app.topbar.scss'],
  animations: [derAIzAnimation, IzADerAnimation]
})
export class AppTopBarComponent implements OnInit {
  darken: boolean;

  constructor(public app: AppprincComponent) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('dark') === 'S') {
      this.refrescar(true);
    } else if (localStorage.getItem('dark') === 'N') {
      this.refrescar(false);
    } else {
      const modo = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.refrescar(modo);
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener('change', (e) => {
      this.refrescar(e.matches);
    });

  }


  refrescar(turnOn: boolean): void {
    if (turnOn === true) {
      this.onChange(true);
    } else {
      this.onChange(false);
    }
  }

  onChange(enable: boolean): void {
    if (enable) {
      this.darken = true;
      localStorage.setItem('dark', 'S');
      this.changeStyleSheetUrl('layout-css', 'blue-dark', 'layout');
    } else {
      this.darken = false;
      localStorage.setItem('dark', 'N');
      this.changeStyleSheetUrl('layout-css', 'blue-light', 'layout');
    }
  }

  changeStyleSheetUrl(id, value, prefix): void {
    const element = document.getElementById(id);
    const urlTokens = element.getAttribute('href').split('/');
    urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
    const newURL = urlTokens.join('/');
    element.setAttribute('href', newURL);
  }
}
