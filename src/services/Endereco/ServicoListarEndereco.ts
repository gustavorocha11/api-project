import { getCustomRepository } from "typeorm"
import { RepositorioEndereco } from "../../repositories/RepositorioEndereco"

class ServicoListarEndereco {
	async execute(){
    
		try {

      const repositorioEndereco = getCustomRepository(RepositorioEndereco)
      const endereco = await repositorioEndereco.find()
      
      return endereco
			
		} catch (error) {
			  return error
		}
	}
}

export {ServicoListarEndereco}