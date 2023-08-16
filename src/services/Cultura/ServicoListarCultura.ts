import { getCustomRepository } from "typeorm"
import { RepositorioCultura } from "../../repositories/RepositorioCultura"

class ServicoListarCultura {
	async execute(){

	const repositorioCultura = getCustomRepository(RepositorioCultura)
	const cultura = await repositorioCultura.find()
	
	return cultura

	}
}

export {ServicoListarCultura}