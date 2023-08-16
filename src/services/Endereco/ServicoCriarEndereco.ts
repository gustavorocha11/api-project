import { response } from "express"
import { getCustomRepository } from "typeorm"
import { RepositorioEndereco } from "../../repositories/RepositorioEndereco"

interface IProdutorRequest {
	cidade: string,
	estado: string,
}

class ServicoCriarEndereco {
	async execute({cidade, estado}: IProdutorRequest){

		const repositorioEndereco = getCustomRepository(RepositorioEndereco)
		try {
      // VALIDA SE EXISTE NOM e CPF_CNPJ preenchido
      if(!cidade ||  !estado){
        throw new Error("CAMPOS OBRIGATÓRIOS NÃO PREENCHIDOS")
      }

      const endereco = repositorioEndereco.create({
        cidade, estado
      })
      await repositorioEndereco.save(endereco)

      return endereco
			
		} catch (error) {
			  return error
		}
	}
}

export {ServicoCriarEndereco}