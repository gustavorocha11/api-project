import {Request, Response} from "express"
import { ServicoAtualizarCultura } from "../../services/Cultura/ServicoAtualizarCultura"

class ControladorAtualizarCultura {

  async handle(request: Request, response: Response){
    

      const {id} = request.params
      const {nome } = request.body
      
      const servicoAtualizarCultura = new ServicoAtualizarCultura()
  
      const cultura = await servicoAtualizarCultura.execute({id, nome})
  
      if(cultura instanceof Error)  { 
        return response.status(400).json(cultura.message)
      }
      
      return response.json({
        mensagem: "Cultura Alterada Com Sucesso",
        cultura
      }).status(200)
  }
}

export {ControladorAtualizarCultura}