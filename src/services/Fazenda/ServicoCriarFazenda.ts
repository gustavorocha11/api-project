import { getCustomRepository } from "typeorm"
import { RepositorioFazenda } from "../../repositories/RepositorioFazenda"

interface IFazendaRequest {
  nome: string,
  a_tot_hect: number,
  a_agric_hect: number,
  a_vege_hect: number,
  produtor_id: string
  endereco_id: string,
  cultura_id
}

class ServicoCriarFazenda {
	async execute(
    {
      nome, 
      a_tot_hect,
      a_agric_hect,
      a_vege_hect,
      produtor_id,
      endereco_id,
      cultura_id,
    }: IFazendaRequest){

		try {
      const repositorioFazenda = getCustomRepository(RepositorioFazenda)
      // VALIDA SE EXISTE OS CAMPOS ESTÃO PREENCHIDOS
      // if(     
      //   !nome         ||
      //   !a_tot_hect   ||
      //   !a_agric_hect ||
      //   !a_vege_hect  ||
      //   !produtor_id  ||
      //   !endereco_id  ||
      //   !cultura_id
      //   )
      //   {
      //      throw new Error("CAMPOS OBRIGATÓRIOS NÃO PREENCHIDOS")
      // }
      const fazenda = repositorioFazenda.create({
        nome,
        a_agric_hect,
        a_vege_hect,
        a_tot_hect,
        endereco_id,
        produtor_id,
        cultura_id
      })

      if(!nome){
        throw new Error("CAMPOS OBRIGATÓRIOS NÃO PREENCHIDOS")
      }
      await repositorioFazenda.save(fazenda)

      return fazenda
			
		} catch (error) {
			  return error
		}
	}
}

export {ServicoCriarFazenda}