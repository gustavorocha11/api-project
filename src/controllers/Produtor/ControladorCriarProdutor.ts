import {Request, Response} from "express"
import { ServicoCriarProdutor } from "../../services/Produtor/ServicoCriarProdutor"

class ControladorCriarProdutor {

  async handle(request: Request, response: Response){
    const {nome, cpf_cnpj} = request.body
  
    const servicoCriarProdutor = new ServicoCriarProdutor()

    const produtor = await servicoCriarProdutor.execute({nome, cpf_cnpj})

    return response.json(produtor).status(200)
  }
}

export {ControladorCriarProdutor}