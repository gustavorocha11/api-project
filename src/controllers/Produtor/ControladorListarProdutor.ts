import {Request, Response} from "express"
import { ServicoListarProdutor } from "../../services/Produtor/ServicoListarProdutor"

class ControladorListarProdutor {

  async handle(request: Request, response: Response){
    
    try {
      
      const servicoListarProdutor = new ServicoListarProdutor()
      const produtor = await servicoListarProdutor.execute()


      if(produtor instanceof Error) {
        return response.status(400).json(produtor.message)
      }

      return response.json({
        "Dados do Produtor ": {
          produtor
        }
      }).status(200)
  
    } catch (error) {
        return response.status(400).json(error) 
    }



  }
}

export {ControladorListarProdutor}