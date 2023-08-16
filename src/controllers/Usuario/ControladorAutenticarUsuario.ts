import {Request, Response} from "express"
import { ServicoAutenticarUsuario } from "../../services/Usuario/ServicoAutenticarUsuario"

class ControladorAutenticarUsuario {

  async handle(request: Request, response: Response){
		const {email, senha} = request.body
		
    try {

      const servicoAutenticarUsuario = new ServicoAutenticarUsuario()

      const token = await servicoAutenticarUsuario.execute({email, senha})
  
      return response.json({
        mensagem: "Utilize este TOKEN no BEAR TOKEN ",
        informalção: "O Mesmo será necessários nas rotas de control de Produtores, Fazendas e Culturas ",
        token
      }).status(200)

    } catch (error) {
        return response.status(400).json(error) 
    }
  }
}

export {ControladorAutenticarUsuario}