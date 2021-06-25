import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('token') === null){
          this.router.navigate(['/login']);
          return false;
        }
        else {
          if (state.url === '/'){
            const role = localStorage.getItem('role');
            if (role === 'User') {
              this.router.navigate(['/modulos/usuariosext']);

            } else if (role === 'Admin') {
              this.router.navigate(['/modulos/usuarios']);
            }
            return false;
          }
          else {
            return true;
          }
        }

    }
}
