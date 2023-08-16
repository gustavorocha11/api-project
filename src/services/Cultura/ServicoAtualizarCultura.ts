import { getCustomRepository } from "typeorm"
import { RepositorioCultura } from "../../repositories/RepositorioCultura"

interface IProdutorRequest {
  id: string,
	nome: string,
}

class ServicoAtualizarCultura {
	async execute({id, nome}: IProdutorRequest){

    const repositorioCultura = getCustomRepository(RepositorioCultura)

    if(!nome){
      throw new Error("CAMPOS OBRIGATÓRIOS NÃO PREENCHIDOS")
    }

    const cultura = await repositorioCultura.findOne(id)
    
    if(!cultura){
      throw new Error("CULTURA NÃO ENCONTRADA")
    }

    cultura.nome = nome ? nome: cultura.nome
    
    await repositorioCultura.save(cultura)

    return cultura

  }
}

export {ServicoAtualizarCultura}