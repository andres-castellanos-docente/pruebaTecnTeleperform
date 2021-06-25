import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {AppCargandoService} from '../appBase/cargando/app.cargando.service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private cargandoService: AppCargandoService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf(environment.urlLogin) === -1) {
      const token = localStorage.getItem('token');
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if ((error.status === 401) || (error.status === 403)) {
          if (request.url.indexOf(environment.urlLogin) === -1) {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            this.router.navigate(['/login']);
          }
        } else {
        }
        this.cargandoService.detenCargando();
        return throwError(error);
      }));
  }
}
