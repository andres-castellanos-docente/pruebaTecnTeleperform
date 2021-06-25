export class UsuariosModel {
  id: number;
  pnombre: string;
  papellid: string;
  snombre: string;
  sapellid: string;
  fechaingreso: string;
  salario: number;
  cargo: string;
  activo: boolean;

  constructor(json: any = null, ed: boolean) {
    if (json !== null) {
      this.id = json.id;
      this.pnombre = json.pnombre;
      this.papellid = json.papellid;
      this.snombre = json.snombre;
      this.sapellid = json.sapellid;
      if (ed === false) {
        this.fechaingreso = json.fechaingreso+ 'T05:00:00.000Z';
      } else {
        const date = new Date(json.fechaingreso);
        let datestr = date.toISOString().substring(0, 10);
        this.fechaingreso = datestr;
      }
      this.salario = json.salario;
      this.cargo = json.cargo;
      this.activo = json.activo;
    } else {
      this.id = null;
      this.pnombre = null;
      this.papellid = null;
      this.snombre = null;

      this.sapellid = null;
      this.fechaingreso = null;
      this.salario = null;
      this.cargo = null;
      this.activo = null;
    }
  }
}
