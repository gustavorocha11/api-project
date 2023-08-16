import {Request, Response} from "express"
import { ServicoAtualizarEndereco } from "../../services/Endereco/ServicoAtualizarEndereco"

class ControladorAtualizarEndereco {

  async handle(request: Request, response: Response){
    
    try {

      const {id} = request.params
      const {cidade, estado } = request.body
      
      const servicoAtualizarEndereco = new ServicoAtualizarEndereco()
  
      const endereco = await servicoAtualizarEndereco.execute({id, cidade, estado})
  
      if(endereco instanceof Error)  { 
        return response.status(400).json(endereco.message)
      }
      
      return response.json({
        mensagem: "Endereço Alterado Com Sucesso",
        endereco
      }).status(200)

    } catch (error) {
        return response.status(400).json(error)
    }
  }
}

export {ControladorAtualizarEndereco}