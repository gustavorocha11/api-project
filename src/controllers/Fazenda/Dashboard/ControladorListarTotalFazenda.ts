import {Request, Response} from "express"
import { ServicoListarTotalFazenda } from "../../../services/Fazenda/Dashboard/ServicoListarTotalFazenda"

class ControladorListarTotalFazenda {

  async handle(request: Request, response: Response){
    
    try {
      const servicoListarTotalFazenda = new ServicoListarTotalFazenda()
      const totalFazendas = await servicoListarTotalFazenda.execute()


      if(totalFazendas instanceof Error) {
        return response.status(400).json(totalFazendas.message)
      }

      return response.json({
        "TOTAL de FAZENDAS cadastradas no sistema ": {
          totalFazendas
        }
      }).status(200)
  
    } catch (error) {
        return response.status(400).json(error)
    }
  }
}

export {ControladorListarTotalFazenda}