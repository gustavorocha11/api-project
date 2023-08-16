import { EntityRepository, Repository} from "typeorm"
import { Fazenda} from "../models/Fazendas"

@EntityRepository(Fazenda)
class RepositorioFazenda extends Repository<Fazenda> {

}

export {RepositorioFazenda}