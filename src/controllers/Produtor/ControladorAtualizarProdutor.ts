import {Request, Response} from "express"
import { ServicoAtualizarProdutor } from "../../services/Produtor/ServicoAtualizarProdutor"

class ControladorAtualizarProdutor {

  async handle(request: Request, response: Response){
    
    const {id} = request.params
    const {nome, cpf_cnpj } = request.body
    
    try {

      const servicoAtualizarProdutor = new ServicoAtualizarProdutor()

      const produtor = await servicoAtualizarProdutor.execute({id, nome, cpf_cnpj})
  
      if(produtor instanceof Error)  { 
        return response.status(400).json(produtor.message)
  
      }
      
      return response.json({
        mensagem: "Produtor Alterado Com Sucesso",
        produtor
      })
    } catch (error) {
        return response.status(400).json(error) 
    }
  }
}


export {ControladorAtualizarProdutor}