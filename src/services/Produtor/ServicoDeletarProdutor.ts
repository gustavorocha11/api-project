import { getCustomRepository } from "typeorm"
import { RepositorioProdutor } from "../../repositories/RepositorioProdutor"

class ServicoDeletarProdutor {
	async execute(id: string) {
    const repositorioProdutor = getCustomRepository(RepositorioProdutor)

    try {
        
      if(!(await repositorioProdutor.findOne(id))){
        return new Error("Produtor não encontrato na base de dados")
      }
      
      await repositorioProdutor.delete(id)
    } catch (error) {
        return error
    }

  }
}

export {ServicoDeletarProdutor}