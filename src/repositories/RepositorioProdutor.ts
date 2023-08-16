import { EntityRepository, Repository} from "typeorm"
import {Produtor} from "../models/Produtores"

@EntityRepository(Produtor)
class RepositorioProdutor extends Repository<Produtor> {

}

export {RepositorioProdutor}