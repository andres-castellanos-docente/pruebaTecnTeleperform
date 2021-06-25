import {Component, OnInit, ViewChild} from '@angular/core';
import {subirAnimation} from '../../../animations/listanim.animations';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AppCargandoService} from '../../../appBase/cargando/app.cargando.service';
import {UsuariosService} from '../../services/usuarios.service';
import {UsuariosModel} from '../../models/usuarios.model';
import {MatDialog} from '@angular/material/dialog';
import {DialogMessagesComponent} from './diagmessages.component';
import {DialogCreatUsuariosComponent} from './dialog-creat-usuarios/dialog-creat-usuarios.component';
import {DialogConfElimComponent} from './diagconfelim.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [subirAnimation]
})
export class UsuariosComponent implements OnInit {
  dataUsuarios: UsuariosModel[];
  dataSource: MatTableDataSource<UsuariosModel>;
  displayedColumns: string[] = ['editar', 'pnombre', 'snombre', 'papellid', 'sapellid', 'fechaingreso', 'salario', 'cargo', 'eliminar'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  indexElEd: number;

  constructor(private usuariosService: UsuariosService, private cargServ: AppCargandoService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.cargServ.iniciarCargando();

    this.usuariosService.listarUsuarios().subscribe((res: Response) => {
      this.dataUsuarios = res as any;
      this.dataSource = new MatTableDataSource<UsuariosModel>(this.dataUsuarios);
      this.dataSource.paginator = this.paginator;
      this.cargServ.detenCargando();
    });
  }

  eliminar(UsuarioEl: UsuariosModel, indexEl: number): void {
    // Se debe que validar la página actual para tomar el índice correcto a eliminar
    const pagact = this.paginator.pageIndex;
    if (pagact === 0) {
      this.indexElEd = indexEl;
    } else {
      const pagsize = this.paginator.pageSize;
      this.indexElEd = (pagsize * pagact) + indexEl;
    }

    const dialogRef = this.dialog.open(DialogConfElimComponent, {
      minWidth: '320px',
      maxWidth: '532px',
      data: {message: '🤔 ¿Desea Borrar el Usuario ' + UsuarioEl.pnombre + ' ' + UsuarioEl.papellid + '?', idUsuarioElim: UsuarioEl.id}
    });
    dialogRef.afterClosed().subscribe(result => {
      // Se verifica si es diferente de nil para evitar error que ocurre al oprimir Esc
      if (result) {
        if (result.result) {
          if ((result.result === true)) {

            this.dialog.open(DialogMessagesComponent, {
              minWidth: '320px',
              maxWidth: '532px',
              data: {message: 'Usuario Eliminado 😌'}
            });
            this.dataUsuarios.splice(this.indexElEd, 1);
            this.dataSource = new MatTableDataSource<UsuariosModel>(this.dataUsuarios);
            this.dataSource.paginator = this.paginator;
          }
        }
      }
    });



  }

  editar(UsuarioEd: UsuariosModel, indexEd: number): void {
    // Se debe que validar la página actual para tomar el índice correcto a editar
    const pagact = this.paginator.pageIndex;
    if (pagact === 0) {
      this.indexElEd = indexEd;
    } else {
      const pagsize = this.paginator.pageSize;
      this.indexElEd = (pagsize * pagact) + indexEd;
    }

    const dialogRef = this.dialog.open(DialogCreatUsuariosComponent, {
      minWidth: '320px',
      maxWidth: '490px',
      data: {dataed: UsuarioEd}
    });
    dialogRef.afterClosed().subscribe(result => {
      // Se verifica si es diferente de nil para evitar error que ocurre al oprimir Esc
      if (result) {
        if (result.result) {
          if ((result.result === true) && (result.dataAdEd)) {
            this.dialog.open(DialogMessagesComponent, {
              minWidth: '320px',
              maxWidth: '532px',
              data: {message: 'Usuario Editado 😃'}
            });
            this.dataUsuarios[this.indexElEd] = result.dataAdEd;
            this.dataSource = new MatTableDataSource<UsuariosModel>(this.dataUsuarios);
            this.dataSource.paginator = this.paginator;
          }
        }
      }
    });
  }

  createDialog(): void {
    const dialogRef = this.dialog.open(DialogCreatUsuariosComponent, {
      minWidth: '320px',
      maxWidth: '490px',
      data: {dataed: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      // Se verifica si es diferente de nil para evitar error que ocurre al oprimir Esc
      if (result) {
        if (result.result) {
          if ((result.result === true) && (result.dataAdEd)) {
            this.dialog.open(DialogMessagesComponent, {
              minWidth: '320px',
              maxWidth: '532px',
              data: {message: 'Usuario Creado 😃'}
            });
            this.dataUsuarios.push(result.dataAdEd);
            this.dataSource = new MatTableDataSource<UsuariosModel>(this.dataUsuarios);
            this.dataSource.paginator = this.paginator;
          }
        }
      }
    });
  }


}
