import {Request, Response} from "express"
import { ServicoDeletarEndereco } from "../../services/Endereco/ServicoDeletarEndereco"

class ControladorDeletarFazenda {

  async handle(request: Request, response: Response){
    
    const {id} = request.params
    
    try {
      const servicoDeletarEndereco = new ServicoDeletarEndereco()

      const endereco = await servicoDeletarEndereco.execute(id)
  
      if(endereco instanceof Error)  { 
        return response.status(400).json(endereco.message)
      }
      
      return response.json({
        mensagem: "Endereço Excluído Com Sucesso",
        endereco
      }).status(200)

    } catch (error) {
        return response.status(400).json(error)
    }
  }
}

export {ControladorDeletarFazenda}