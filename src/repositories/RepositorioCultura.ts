import { EntityRepository, Repository} from "typeorm"
import {Cultura} from "../models/Culturas"

@EntityRepository(Cultura)
class RepositorioCultura extends Repository<Cultura> {

}

export {RepositorioCultura}