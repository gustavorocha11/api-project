import {Request, Response} from "express"
import { ServicoListarTotalFazendaCultivo } from "../../../services/Fazenda/Dashboard/ServicoListarTotalFazendaCultivo"

class ControladorListarTotalHectarFazendaCultivo {

  async handle(request: Request, response: Response){
    
    const { cultura_id } = request.body
    
    try {
      const servicoListarTotalFazendaCultivo = new ServicoListarTotalFazendaCultivo()

      const total_fazenda_por_cultivo = await servicoListarTotalFazendaCultivo.execute({
        cultura_id
      })
  
      if(total_fazenda_por_cultivo instanceof Error)  { 
        return response.status(400).json(total_fazenda_por_cultivo.message)
      }
  
      return response.json({
        mensagem: "FAZENDAS por CULTIVO",
        total_fazenda_por_cultivo
      }).status(200)
    } catch (error) {
        return response.status(400).json(error) 
    }
  }
}


export {ControladorListarTotalHectarFazendaCultivo}