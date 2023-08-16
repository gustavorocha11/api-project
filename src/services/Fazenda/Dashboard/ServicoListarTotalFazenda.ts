import { Column, getCustomRepository } from "typeorm"
import { RepositorioFazenda } from "../../../repositories/RepositorioFazenda"

class ServicoListarTotalFazenda {
	async execute(){
    
		try {

      const repositorioFazenda = getCustomRepository(RepositorioFazenda)

      const totalFazendas = await repositorioFazenda.count()

        // where: {
        //   id: !null
        // }
      
	      
      return totalFazendas
			
		} catch (error) {
			  return error
		}

	}
}

export {ServicoListarTotalFazenda}