import { getCustomRepository } from "typeorm"
import { RepositorioProdutor } from "../../repositories/RepositorioProdutor"

// MÉTODO EXECUTE, LISTA OS DADOS DOS PRODUTORES
class ServicoListarProdutor {
	async execute(){
    
		try {

      // Inicializa o repositório
      const repositorioProdutor = getCustomRepository(RepositorioProdutor)
      const produtor = await repositorioProdutor.find()
      return produtor
			
		} catch (error) {
			  return error
		}
	}
}

export {ServicoListarProdutor}