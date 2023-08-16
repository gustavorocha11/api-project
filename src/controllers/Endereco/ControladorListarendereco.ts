import {Request, Response} from "express"
import { ServicoListarEndereco } from "../../services/Endereco/ServicoListarEndereco"

class ControladorListarEndereco {

  async handle(request: Request, response: Response){
    
    try {
      const servicoListarEndereco = new ServicoListarEndereco()
      const endereco = await servicoListarEndereco.execute()


      if(endereco instanceof Error) {
        return response.status(400).json(endereco.message)
      }

      return response.json({
        "Lista de Endereços ": {
          endereco
        }
      }).status(200)
  
    } catch (error) {
        return response.status(400).json(error)
    }
  }
}

export {ControladorListarEndereco}