import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AppCargandoService} from '../../../appBase/cargando/app.cargando.service';
import {UsuariosService} from '../../services/usuarios.service';
import {DialogMessagesComponent} from './diagmessages.component';
import {CreateEdUsuarioResponse} from '../../responses/listResponses';



@Component({
  selector: 'app-diagconfelim-component',
  templateUrl: 'diagconfelim.component.html'
})
export class DialogConfElimComponent {
  message: string;
  idUsuarioElim: number;

  constructor(public dialog: MatDialog, private usuariosService: UsuariosService, private cargServ: AppCargandoService,
              public dialogRef: MatDialogRef<DialogConfElimComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data.message;
    this.idUsuarioElim = data.idUsuarioElim;
  }

  public Cerrar(resultad: boolean): void {
    let resultado: any;
    if (resultad === true) {
      resultado = {result: resultad};
    } else {
      resultado = {result: resultad};
    }
    this.dialogRef.close(resultado);
  }

  public Aceptar(): void {
    this.cargServ.iniciarCargando();
    this.usuariosService.eliminarUsuario(this.idUsuarioElim).subscribe((res: Response) => {
      const response: CreateEdUsuarioResponse = res as any;
      this.cargServ.detenCargando();

      if (response.codeError === 1) {
        this.Cerrar(true);
      } else {
        this.dialog.open(DialogMessagesComponent, {
          minWidth: '320px',
          maxWidth: '632px',
          data: {message: response.message + ' 😅'}
        });
        this.Cerrar(false);
      }
    });
  }

}

