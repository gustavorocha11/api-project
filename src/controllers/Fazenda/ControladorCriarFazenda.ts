import {Request, Response} from "express"
import { Any, OneToMany } from "typeorm"
import { ServicoCriarFazenda } from "../../services/Fazenda/ServicoCriarFazenda"

class ControladorCriarFazenda {

  async handle(request: Request, response: Response){
    const {
      nome, 
      a_tot_hect,
      a_agric_hect,
      a_vege_hect,
      produtor_id,
      endereco_id,
      cultura_id
     } = request.body
    
     try {
      const servicoCriarFazenda = new ServicoCriarFazenda()

      const fazenda = await servicoCriarFazenda.execute({
        nome, 
        a_tot_hect,
        a_vege_hect,
        a_agric_hect,
        produtor_id,
        endereco_id,
        cultura_id
      })
  
      return response.json(fazenda).status(200)

     } catch (error) {
        return response.status(400).json(error)
     }
  }
}

export {ControladorCriarFazenda}