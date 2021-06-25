import {Component, OnInit, ViewChild} from '@angular/core';
import {subirAnimation} from "../../../animations/listanim.animations";
import {AppCargandoService} from '../../../appBase/cargando/app.cargando.service';
import {UsuariosExtService} from '../../services/usuariosext.service';
import {UsuariosExtModel} from '../../models/usuariosext.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-signup',
  templateUrl: './usuariosext.component.html',
  styleUrls: ['./usuariosext.component.scss'],
  animations: [subirAnimation]
})
export class UsuariosextComponent implements OnInit {
  dataUsuarios: UsuariosExtModel[];
  dataSource: MatTableDataSource<UsuariosExtModel>;
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usuariosExtService: UsuariosExtService, private cargServ: AppCargandoService) {
  }

  ngOnInit(): void {
    this.cargServ.iniciarCargando();

    this.usuariosExtService.listarUsuarios().subscribe((res: Response) => {
      this.dataUsuarios = res as any;
      this.dataSource = new MatTableDataSource<UsuariosExtModel>(this.dataUsuarios);
      this.dataSource.paginator = this.paginator;
      this.cargServ.detenCargando();
    });
  }

}
