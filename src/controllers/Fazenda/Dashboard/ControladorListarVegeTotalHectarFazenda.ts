import {Request, Response} from "express"
import { ServicoListarTotalFazendaAgric } from "../../../services/Fazenda/Dashboard/ServicoListarTotalFazendaAgric"

class ControladorListarVegeTotalHectarFazenda{

  async handle(request: Request, response: Response){
    
    try {
      
      const servicoListarTotalFazendaAgric = new ServicoListarTotalFazendaAgric()
      const totalHectarFazendasgriAgric = await servicoListarTotalFazendaAgric.execute()


      if(totalHectarFazendasgriAgric instanceof Error) {
        return response.status(400).json(totalHectarFazendasgriAgric.message)
      }

      return response
      .status(200)
      .json({
        "TOTAL GERAL DE AREAS AGRICULTÁVEL EM HECTARES ": {
          totalHectarFazendasgriAgric
        }
      })
  
    } catch (error) {
        return response.status(400).json(error)  
    }
  }
}

export {ControladorListarVegeTotalHectarFazenda}