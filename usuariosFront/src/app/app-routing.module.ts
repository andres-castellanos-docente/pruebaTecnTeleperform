import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppprincComponent} from "./appBase/princ/appprinc.component";
import {LoginComponent} from './login/login.component';
import {LoginGuard} from './guards/login.guard';

const routes: Routes = [
  {
  path: '', component: AppprincComponent,
  children: [
    {
      path: 'modulos',
      loadChildren: () => import('./modules/modulosext.module').then(mod => mod.ModulosextModule)
    }], canActivate: [LoginGuard]
  },
  {path: 'login', component: LoginComponent, canActivate: []}
];

/*
  {
  path: '', component: AppprincComponent,
  children: [
  {path: 'inicio', component: BlankComponent, canActivate: [LoginGuard]},
  {
    path: 'modulos',
    loadChildren: () => import('./modules/modulosext.module').then(mod => mod.ModulosextModule)
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}], canActivate: [LoginGuard]
}




]; */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
