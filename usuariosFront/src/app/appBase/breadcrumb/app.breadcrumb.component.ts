import {Component, OnInit} from '@angular/core';
import { derAIzAnimation} from '../../animations/listanim.animations';
import {Observable} from 'rxjs';
import {ValorReloj, XsegundoService} from './xsegundo.service';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './app.breadcrumb.component.html', styleUrls: ['./app.breadcrumb.scss'],
    animations: [derAIzAnimation]
})
export class AppBreadCrumbComponent implements OnInit{

  datos$: Observable<ValorReloj>;
  hora: number;
  minutos: string;
  dia: string;
  fecha: string;
  ampm: string;
  segundos: string;


  constructor(private segundo: XsegundoService) {
  }

  ngOnInit(): void {
    this.datos$ = this.segundo.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo;
    });
  }

}
