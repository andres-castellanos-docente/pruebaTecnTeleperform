import {Injectable, SkipSelf} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UsuariosModel} from '../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(@SkipSelf() private http: HttpClient) {
  }

  path = 'usuarios';

  listarUsuarios(): Observable<any> {
    return this.http.get(environment.apiUrl + this.path, {});
  }

  crearUsuario(request: UsuariosModel): Observable<any> {
    return this.http.post(environment.apiUrl + this.path, request, {});
  }

  editarUsuario(request: UsuariosModel): Observable<any> {
    return this.http.put(environment.apiUrl + this.path + '/' + request.id.toString(), request, {});
  }

  eliminarUsuario(idElim: number): Observable<any> {
    return this.http.delete(environment.apiUrl + this.path + '/' + idElim.toString(), {});
  }

}
