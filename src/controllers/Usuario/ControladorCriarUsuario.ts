import {Request, Response} from "express"
import { ServicoCriarUsuario } from "../../services/Usuario/ServicoCriarUsuario"

class ControladorCriarUsuario {

  async handle(request: Request, response: Response){
    const {nome, email, admin, senha} = request.body
  
    const servicoCriarUsuario = new ServicoCriarUsuario()

    const usuario = await servicoCriarUsuario.execute({nome, email, admin, senha})
    
      return response.json(usuario)
  }
}

export {ControladorCriarUsuario}