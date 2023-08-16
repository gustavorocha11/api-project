import { response} from "express"
import { getCustomRepository } from "typeorm"
import { RepositorioCultura } from "../../repositories/RepositorioCultura"

class ServicoDeletarCultura {
	async execute(id: string) {
	
  const rcepositorioCultura = getCustomRepository(RepositorioCultura)
  
    
    if(!(await rcepositorioCultura.findOne(id))){
      // return response.status(100).json("CULTURA NÃO ENCONTRADA NA BASE DE DADOS")
      return new Error("VERIFIQUE SE A CULTURA A SER EXECLUÍDA EXISTE E TENTE NOVAMENTE")
    }
    
    await rcepositorioCultura.delete(id)

  }
}

export {ServicoDeletarCultura}