import { NgModule } from '@angular/core';
import { ModulosextRoutingModule } from './modulosext-routing.module';
import { HomeComponent } from './formas/home/home.component';
import { UsuariosextComponent } from './formas/usuariosext/usuariosext.component';
import {UsuariosExtService} from './services/usuariosext.service';
import {SharedModule} from '../SharedModule';
import { UsuariosComponent } from './formas/usuarios/usuarios.component';
import {UsuariosService} from './services/usuarios.service';
import {DialogMessagesComponent} from './formas/usuarios/diagmessages.component';
import {DialogConfElimComponent} from './formas/usuarios/diagconfelim.component';
import { DialogCreatUsuariosComponent } from './formas/usuarios/dialog-creat-usuarios/dialog-creat-usuarios.component';

@NgModule({
  imports: [
    ModulosextRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    UsuariosextComponent,
    UsuariosComponent,
    DialogMessagesComponent,
    DialogConfElimComponent,
    DialogCreatUsuariosComponent
  ],
  entryComponents: [],
  providers: [UsuariosExtService, UsuariosService ]
})
export class ModulosextModule { }
