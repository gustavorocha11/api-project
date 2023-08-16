import {Request, Response} from "express"
import { ServicoListarUsuario } from "../../services/Usuario/ServicoListarUsuario"

class ControladorListarUsuario {

  async handle(request: Request, response: Response){
    
    try {
      
      const servicoListarUsuario = new ServicoListarUsuario()
      const usuario = await servicoListarUsuario.execute()


      if(usuario instanceof Error) {
        return response.status(400).json(usuario.message)
      }

      return response.json({
        "Todos os usuários cadastrados ": {
          usuario
        }
      }).status(200)
  
    } catch (error) {
        return response.status(400).json(error) 
    }



  }
}

export {ControladorListarUsuario}