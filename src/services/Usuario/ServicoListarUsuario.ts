import { getCustomRepository } from "typeorm"
import { RepositorioUsuario } from "../../repositories/RepositorioUsuario"

// MÉTODO EXECUTE, LISTA OS DADOS DOS PRODUTORES
class ServicoListarUsuario {
	async execute(){
    
		try {

      // Inicializa o repositório
      const repositorioUsuario = getCustomRepository(RepositorioUsuario)
      const usuario = await repositorioUsuario.find()
      return usuario
			
		} catch (error) {
			  return error
		}
	}
}

export {ServicoListarUsuario}