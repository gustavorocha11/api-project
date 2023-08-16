import { EntityRepository, Repository} from "typeorm"
import {Usuario} from "../models/Usuarios"

@EntityRepository(Usuario)
class RepositorioUsuario extends Repository<Usuario> {


}

export {RepositorioUsuario}