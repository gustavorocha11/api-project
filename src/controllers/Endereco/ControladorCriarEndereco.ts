import {Request, Response} from "express"
import { ServicoCriarEndereco } from "../../services/Endereco/ServicoCriarEndereco"

class ControladorCriarEndereco {

  async handle(request: Request, response: Response){
    const {cidade, estado} = request.body
    
    try {

      const servicoCriarEndereco = new ServicoCriarEndereco()

      const endereco = await servicoCriarEndereco.execute({cidade, estado})
  
      return response.status(201).json({
        mensagem: "Endereço Cadastrado com sucesso",
        endereco
      }).status(200)
      
    } catch (error) {
        return response.status(400).json(error)
    }
  }
}

export {ControladorCriarEndereco}