import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./formas/home/home.component";
import {UsuariosextComponent} from "./formas/usuariosext/usuariosext.component";
import {UsuariosComponent} from './formas/usuarios/usuarios.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: []},
  {path: 'usuariosext', component: UsuariosextComponent, canActivate: []},
  {path: 'usuarios', component: UsuariosComponent, canActivate: []},
  {path: '', redirectTo: 'home', pathMatch: 'full', canActivate: []}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosextRoutingModule {
}
