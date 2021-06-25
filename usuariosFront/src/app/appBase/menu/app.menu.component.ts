import {Component, Input, OnInit, HostListener} from '@angular/core';
import {AppprincComponent} from '../princ/appprinc.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {subirAnimationMenu} from '../../animations/listanim.animations';
import {MenuItem} from './app-menuitemInterf';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html', styleUrls: ['./app.menu.scss'],
  animations: [subirAnimationMenu]
})
export class AppMenuComponent implements OnInit {
  model: any[];
  model2: any[];
  verTipMenu: boolean;
  role: string;

  constructor(public app: AppprincComponent, private router: Router, public auth: AuthService) {
    if (localStorage.getItem('tipMenu') === 'H') {
      this.app.menuHorizontal = true;
    } else if (localStorage.getItem('tipMenu') === 'V') {
      this.app.menuHorizontal = false;
    } else {
      this.app.menuHorizontal = false;
    }

    if (window.innerWidth > 1024) {
      this.verTipMenu = true;
    }
    this.role = localStorage.getItem('role');
    this.refrescarMenu();
  }


  refrescarMenu(): void {
    this.model = [
      {
        label: 'Home', icon: 'fa-home', routerLink: ['/modulos/home']
      }
    ];
    if (this.role === 'User') {
      this.model.push({
        label: 'Usuarios Servic. Externo', routerLink: ['/modulos/usuariosext'], icon: 'fa-user'
      });

    } else if (this.role === 'Admin') {
      this.model.push({
        label: 'Usuarios Internos', routerLink: ['/modulos/usuarios'], icon: 'fa-user'
      });
    }

    this.model.push({
      label: 'Cerrar Sesion', icon: 'fa-sign-out-alt', command: (event: any) => {
        this.auth.logout();
      }
    });
  }

  refrescarModelo(): void {
    this.model2 = [];
    if (this.verTipMenu) {
      this.model2.push(this.tipomenu());
    }
  }

  tipomenu(): any {
    let d: any;
    if (this.verTipMenu) {
      d = {
        label: 'TipoMenu', icon: 'fa-align-center', items: [{
          label: 'Vertical', icon: 'fa-align-center', command: (event: any) => {
            this.app.menuHorizontal = false;
            localStorage.setItem('tipMenu', 'V');
          }
        },
          {
            label: 'Horizontal', icon: 'fa-align-center', command: (event: any) => {
              this.app.menuHorizontal = true;
              localStorage.setItem('tipMenu', 'H');
            }
          }]
      };
      return d;
    }
  }

  ngOnInit(): void {
    this.refrescarMenu();
    this.refrescarModelo();
    const self = this;
    setTimeout(() => {
      this.refrescarMenu();
    }, 200);
    setTimeout(() => {
      if (window.innerWidth >= 1024) {
        self.app.sidebarActive = true;
      }
    }, 1200);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {

    if (window.innerWidth < 1024) {
      // Solo se muestra tipo de menu resoluciones mayores a 1024
      if (this.verTipMenu === true) {
        this.verTipMenu = false;
        this.refrescarModelo();

      }
      // Evita que el boton menu se pierda
      if (this.app.menuHorizontal) {
        localStorage.setItem('tipMenu', 'V');
        this.app.menuHorizontal = false;
      }
      if (!$('#princ').hasClass('layout-mobile-active')) {
        if (this.app.sidebarActive) {
          this.app.sidebarActive = false;
        }
      }
    } else {
      if (this.verTipMenu === false) {
        this.verTipMenu = true;
        this.refrescarModelo();

      }
    }
  }
}

@Component({
  selector: '[app-submenu]',
  templateUrl: './app.submenu.component.html',
  animations: [
    trigger('children', [
      state('visible', style({
        height: '*'
      })),
      state('hidden', style({
        height: '0px'
      })),
      transition('visible => hidden', animate('600ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('600ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class AppSubMenuComponent {

  @Input() item: MenuItem;
  @Input() tipo: number;
  @Input() root: boolean;
  activeIndex: number;
  hover: boolean;

  constructor(public app: AppprincComponent, public appMenu: AppMenuComponent, private router: Router) {
  }

  itemClick(event: Event, item: MenuItem, index: number): void {
    if (item.disabled) {
      event.preventDefault();
      // return true;
    }

    if (item.routerLink || item.items || item.command || item.url) {
      this.activeIndex = (this.activeIndex as number === index) ? -1 : index;
    }

    if (item.command) {
      item.command({originalEvent: event, iteme: item});
    }

    if (item.items || (!item.url && !item.routerLink)) {
      event.preventDefault();
    }
    if ((!item.items) && (this.tipo === 2)) {
      item.expanded = false;
    }
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }

  isActiveRoute(route: string): boolean {
    if (route) {
      route = route[0];
      return this.router.url === route || route.indexOf(this.router.url + '/') > -1;
    }
    return false;
  }
}
