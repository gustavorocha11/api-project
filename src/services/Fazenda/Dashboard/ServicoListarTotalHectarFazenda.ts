import { Column, getCustomRepository } from "typeorm"
import { Fazenda } from "../../../models/Fazendas"
import { RepositorioFazenda } from "../../../repositories/RepositorioFazenda"

class ServicoListarTotalHectarFazenda {
	async execute(){
    
		try {

      const totalHectar = getCustomRepository(RepositorioFazenda)
      .createQueryBuilder("fazenda")
      .select("SUM(a_tot_hect)", "Total_Hectares")
      .getRawOne()   

      // const totalFazendas = await repositorioFazenda.createQueryBuilder()
      // .select("SUM(a_agric_hect)" + Fazenda)
      // .getRawOne()    
	      
      return totalHectar
			
		} catch (error) {
			  return error
		}

	}
}

export {ServicoListarTotalHectarFazenda}