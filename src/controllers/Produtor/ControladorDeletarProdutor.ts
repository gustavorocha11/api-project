import {Request, Response} from "express"
import { ServicoDeletarProdutor } from "../../services/Produtor/ServicoDeletarProdutor"

class ControladorDeletarProdutor {

  async handle(request: Request, response: Response){
    
    const {id} = request.params
    
    try {

      const servicoDeletarProdutor = new ServicoDeletarProdutor()

      const produtor = await servicoDeletarProdutor.execute(id)
  
      if(produtor instanceof Error)  { 
        return response.status(400).json(produtor.message)
  
      }
      
      return response.json({
        mensagem: "Produtor Excluído Com Sucesso",
        produtor
      }).status(200)

    } catch (error) {
        return response.status(400).json(error) 
    }
  }
}

export {ControladorDeletarProdutor}