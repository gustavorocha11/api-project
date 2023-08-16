import {Request, Response} from "express"
import { ServicoListarTotalHectarFazenda } from "../../../services/Fazenda/Dashboard/ServicoListarTotalHectarFazenda"

class ControladorListarTotalHectarFazenda {

  async handle(request: Request, response: Response){
    
    try {
      const servicoListarTotalHectarFazenda = new ServicoListarTotalHectarFazenda()
      const totalHectarFazendas = await servicoListarTotalHectarFazenda.execute()


      if(totalHectarFazendas instanceof Error) {
        return response.status(400).json(totalHectarFazendas.message)
      }

      return response
      .status(200)
      .json({
        "TOTAL GERAL DE HECTARES DAS FAZENDAS CADASTRADASFAZENDAS cadastradas no sistema ": {
          totalHectarFazendas
        }
      }).json(200)
  
    } catch (error) {
        return response.status(400).json(error)  
    }
  }
}

export {ControladorListarTotalHectarFazenda}