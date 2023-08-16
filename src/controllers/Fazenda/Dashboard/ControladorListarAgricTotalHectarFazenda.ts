import {Request, Response} from "express"
import { ServicoListarTotalFazendaVege } from "../../../services/Fazenda/Dashboard/ServicoListarTotalFazendaVege"

class ControladorListarAgricTotalHectarFazenda{

  async handle(request: Request, response: Response){
    
    try {
      const servicoListarTotalFazendaVege = new ServicoListarTotalFazendaVege()
      const totalHectarFazendaVege = await servicoListarTotalFazendaVege.execute()


      if(totalHectarFazendaVege instanceof Error) {
        return response.status(400).json(totalHectarFazendaVege.message)
      }

      return response
      .status(200)
      .json({
        "TOTAL GERAL DE AREAS VEGETAL EM HECTARES ": {
          totalHectarFazendaVege
        }
      }).status(200)
  
    } catch (error) {
        return response.status(400).json(error)
    }
  }
}

export {ControladorListarAgricTotalHectarFazenda}