import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppCargandoService {
    private cargand = false;
    cargandoEstado: Subject<any> = new Subject();


    get cargando(): boolean {
        return this.cargand;
    }

    set cargando(value) {
        this.cargand = value;
        this.cargandoEstado.next(value);
    }

    iniciarCargando(): void {
        this.cargando = true;
    }

    detenCargando(): void {
        this.cargando = false;
    }
}
