import { getCustomRepository } from "typeorm"
import { RepositorioFazenda } from "../../../repositories/RepositorioFazenda"

class ServicoListarFazenda {
	async execute(){
    
		try {

      const repositorioFazenda = getCustomRepository(RepositorioFazenda)
      const fazenda = await repositorioFazenda.find()
      
      return fazenda
			
		} catch (error) {
			  return error
		}
	}
}

export {ServicoListarFazenda}