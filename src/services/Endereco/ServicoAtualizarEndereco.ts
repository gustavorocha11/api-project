import { getCustomRepository } from "typeorm"
import { RepositorioEndereco } from "../../repositories/RepositorioEndereco"

interface IProdutorRequest {
  id: string,
	cidade: string,
	estado: string,
}

class ServicoAtualizarEndereco {
	async execute({id, cidade, estado}: IProdutorRequest){
	
    try {
      const repositorioEndereco = getCustomRepository(RepositorioEndereco)

      if(!estado || !cidade){
        throw new Error("CAMPOS OBRIGATÓRIOS NÃO PREENCHIDOS")
      }
  
      const endereco = await repositorioEndereco.findOne(id)
      
      if(!endereco){
        return new Error("Endereço não encontrado")
      }
  
      endereco.cidade = cidade ? cidade: endereco.cidade
      endereco.estado = estado ? estado: endereco.estado
      
      await repositorioEndereco.save(endereco)
  
      return endereco

    } catch (error) {
        return error
    }
  }
}

export {ServicoAtualizarEndereco}