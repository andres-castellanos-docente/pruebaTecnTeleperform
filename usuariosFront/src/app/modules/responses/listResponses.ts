import {UsuariosModel} from '../models/usuarios.model';


export interface CreateEdUsuarioResponse {
    codeError: number;
    usuario: UsuariosModel;
    message: string;
}

