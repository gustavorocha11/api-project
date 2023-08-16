import { getCustomRepository } from "typeorm"
import { RepositorioFazenda } from "../../../repositories/RepositorioFazenda"

interface IFazendaRequest {
  cultura_id: string,
}

class ServicoListarTotalFazendaCultivo {
	async execute({cultura_id}: IFazendaRequest){
    
		try {
      
      const totalHectarFazendaCultivo = getCustomRepository(RepositorioFazenda)
      .createQueryBuilder("fazenda")
      .select("COUNT(id)", "Total")
      .where("fazenda.culturaidid = :culturaidid", {cultura_id})
      .getRawOne()  
      
      return totalHectarFazendaCultivo
			
		} catch (error) {
			  return error
		}

	}
}

export {ServicoListarTotalFazendaCultivo}