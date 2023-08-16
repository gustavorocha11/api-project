import { EntityRepository, Repository} from "typeorm"
import {Endereco} from "../models/Enderecos"

@EntityRepository(Endereco)
class RepositorioEndereco extends Repository<Endereco> {

}

export {RepositorioEndereco}