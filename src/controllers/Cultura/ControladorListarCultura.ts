import {Request, Response} from "express"
import { ServicoListarCultura } from "../../services/Cultura/ServicoListarCultura"

class ControladorListarCultura {

  async handle(request: Request, response: Response){
    
    
    const servicoListarCultura = new ServicoListarCultura()
    const cultura = await servicoListarCultura.execute()


    if(cultura instanceof Error) {
      return response.status(400).json(cultura.message)
    }

    return response.json({
      "Lista de Culturas Disponíveis para o Cultivo ": {
        cultura
      }
    }).status(200)

  }
}

export {ControladorListarCultura}