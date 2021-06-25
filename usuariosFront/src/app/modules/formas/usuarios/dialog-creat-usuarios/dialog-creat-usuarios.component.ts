import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UsuariosModel} from '../../../models/usuarios.model';
import {AppCargandoService} from '../../../../appBase/cargando/app.cargando.service';
import {UsuariosService} from '../../../services/usuarios.service';
import {DialogMessagesComponent} from '../diagmessages.component';
import {CreateEdUsuarioResponse} from '../../../responses/listResponses';

@Component({
  selector: 'app-dialog-creat-usuarios',
  templateUrl: './dialog-creat-usuarios.component.html',
  styleUrls: ['./dialog-creat-usuarios.component.scss']
})
export class DialogCreatUsuariosComponent implements OnInit {
  usuarioForm: FormGroup;
  dataAdEd: UsuariosModel;
  selectedUsuario: UsuariosModel;
  usuarioSubmited: boolean;

  constructor(public dialog: MatDialog, private builder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any, private cargServ: AppCargandoService,
              public dialogRef: MatDialogRef<DialogCreatUsuariosComponent>,
              private usuariosService: UsuariosService) {

    if (data.dataed === null) {
      this.selectedUsuario = new UsuariosModel(null, false);
    } else {
      this.selectedUsuario = new UsuariosModel(data.dataed, false);
    }

  }

  ngOnInit(): void {
    this.usuarioForm = this.builder.group({
      id: [this.selectedUsuario.id, []],
      pnombre: [this.selectedUsuario.pnombre, [Validators.required, Validators.maxLength(80)]],
      snombre: [this.selectedUsuario.snombre, [Validators.maxLength(80)]],
      papellid: [this.selectedUsuario.papellid, [Validators.required, Validators.maxLength(80)]],
      sapellid: [this.selectedUsuario.sapellid, [Validators.maxLength(80)]],
      cargo: [this.selectedUsuario.cargo, [Validators.required, Validators.maxLength(200)]],
      fechaingreso: [this.selectedUsuario.fechaingreso, [Validators.required]],
      salario: [this.selectedUsuario.salario, [Validators.required]]
    });
  }

  onSubmitCrear(): void {
    this.usuarioSubmited = true;
    if (this.usuarioForm.invalid) {
      return;
    }
    const usuarioModelEnv = new UsuariosModel(this.usuarioForm.value, true);
    this.cargServ.iniciarCargando();
    if (this.data.dataed === null) {
      this.usuariosService.crearUsuario(usuarioModelEnv).subscribe((res: Response) => {
        const response: CreateEdUsuarioResponse = res as any;
        this.cargServ.detenCargando();

        if (response.codeError === 1) {
          this.dataAdEd = response.usuario;
          this.Close(true);
        } else {
          this.dialog.open(DialogMessagesComponent, {
            minWidth: '320px',
            maxWidth: '632px',
            data: {message: 'Ocurrió un error al Crear el Usuario 😅'}
          });
          this.Close(false);
        }
      });
    } else {
      this.usuariosService.editarUsuario(usuarioModelEnv).subscribe((res: Response) => {
        const response: CreateEdUsuarioResponse = res as any;
        this.cargServ.detenCargando();
        if (response.codeError === 1) {
          this.dataAdEd = response.usuario;
          this.Close(true);
        } else {
          this.dialog.open(DialogMessagesComponent, {
            minWidth: '320px',
            maxWidth: '632px',
            data: {message: 'Ocurrió un error al Editar el Usuario 😅'}
          });
          this.Close(false);
        }
      });
    }
  }

  public Close(resultad: boolean): void {
    let resultado: any;

    if (resultad === true) {
      resultado = {result: resultad, dataAdEd: this.dataAdEd};
    } else {
      resultado = {result: resultad, dataAdEd: null};
    }
    this.dialogRef.close(resultado);
  }
}
