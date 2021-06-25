import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AppCargandoService} from './app.cargando.service';
@Component({
    selector: 'app-cargando',
    templateUrl: './app.cargando.component.html',
  styleUrls: ['./app.cargando.component.scss']
})

export class AppCargandoComponent implements OnInit, OnDestroy {
    constructor(private cargandoService: AppCargandoService) {
    }

    cargando = false;
    loadingSubscription: Subscription;

    ngOnInit(): void {
        this.loadingSubscription = this.cargandoService.cargandoEstado.subscribe((value) => {
            this.cargando = value;
        });
    }

    ngOnDestroy(): void {
        this.loadingSubscription.unsubscribe();
    }



}
