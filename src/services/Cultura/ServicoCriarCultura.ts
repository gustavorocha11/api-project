import { response } from "express"
import { getCustomRepository } from "typeorm"
import { RepositorioCultura } from "../../repositories/RepositorioCultura"

interface ICulturaRequest {
	nome: string,
}

class ServicoCriarCultura {
	async execute({nome}: ICulturaRequest){

		
    const repositorioCultura = getCustomRepository(RepositorioCultura)

    if(!nome){
      throw new Error("CAMPO OBRIGATÓRIO NÃO PREENCHIDO")
    }

    const verificarNomeCultura = await repositorioCultura.findOne({
			nome
		})

		if(verificarNomeCultura) {
			 throw new Error("Cultura já Existe")
		}

    const cultura = repositorioCultura.create({
      nome
    })
    await repositorioCultura.save(cultura)

    return cultura
			
	}
}

export {ServicoCriarCultura}