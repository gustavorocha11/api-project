import {Request, Response} from "express"
import { ServicoCriarCultura } from "../../services/Cultura/ServicoCriarCultura"

class ControladorCriarCultura {

  async handle(request: Request, response: Response){
    
      const {nome} = request.body

      const servicoCriarCultura = new ServicoCriarCultura()
  
      const cultura = await servicoCriarCultura.execute({nome})
      
      return response.json(cultura)
  }
}

export {ControladorCriarCultura}