import { getCustomRepository } from "typeorm"
import { RepositorioEndereco } from "../../repositories/RepositorioEndereco"

class ServicoDeletarEndereco {
	async execute(id: string) {
	
    try {
      const repositorioEndereco = getCustomRepository(RepositorioEndereco)
  
      if(!(await repositorioEndereco.findOne(id))){
        return new Error("VERIFIQUE SE O ENDERÇEO EXISTE, E TENTE NOVAMENTE")
      }
      
      await repositorioEndereco.delete(id)

    } catch (error) {
        return error
    }

  }
}

export {ServicoDeletarEndereco}