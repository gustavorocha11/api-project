import { getCustomRepository } from "typeorm"
import { RepositorioFazenda } from "../../../repositories/RepositorioFazenda"

interface IFazendaRequest {
  endereco_id: string,
}

class ServicoListarTotalFazendaEstado {
	async execute({endereco_id}: IFazendaRequest){
    
		try {
      
      const totalHectarFazendaEndereco = getCustomRepository(RepositorioFazenda)
      .createQueryBuilder("fazenda")
      .select("COUNT(id)", "Total")
      .where("fazenda.endereco_id = :endereco_id", {endereco_id})
      .getRawOne()  

      return totalHectarFazendaEndereco
			
		} catch (error) {
			  return error
		}

	}
}

export {ServicoListarTotalFazendaEstado}