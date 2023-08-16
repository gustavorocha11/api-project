import { getCustomRepository } from "typeorm"
import { RepositorioFazenda } from "../../../repositories/RepositorioFazenda"

class ServicoListarTotalFazendaVege {
	async execute(){
    
		try {

      const a_vege_hect = getCustomRepository(RepositorioFazenda)
      .createQueryBuilder("fazenda")
      .select("SUM(a_vege_hect)", "Area_Vegetacao")
      .getRawOne()   
      return a_vege_hect
			
		} catch (error) {
			  return error
		}

	}
}

export {ServicoListarTotalFazendaVege}