import {Injectable, SkipSelf} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosExtService {

  constructor(@SkipSelf() private http: HttpClient) {
  }

  path = 'apiextern';

  listarUsuarios(): Observable<any> {
    return this.http.get(environment.apiUrl + this.path, {});
  }

}
