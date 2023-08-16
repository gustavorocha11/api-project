import { getCustomRepository } from "typeorm"
import { RepositorioProdutor } from "../../repositories/RepositorioProdutor"

// INTERFACE COM OS DADOS DA TABELA PRODUTOR
interface IProdutorRequest {
	nome: string,
	cpf_cnpj: string,
}

// MÉTODO EXECUTE, RECEBE OS PARAMETROS NOME e CPF_CNPJ VINDOS DA INTERFACE
class ServicoCriarProdutor {
	async execute({nome, cpf_cnpj}: IProdutorRequest){
		// Inicializa o repositório
		const repositorioProdutor = getCustomRepository(RepositorioProdutor)

	
      // VALIDA SE EXISTE NOM e CPF_CNPJ preenchido
      if(!nome || !cpf_cnpj){
        throw new Error("Campos obrigatórios não preenchidos")
      }

      // BUSCA PELO CPF_CNPJ
      const verificarCpf_CnpjUsuario = await repositorioProdutor.findOne({
        cpf_cnpj
      })

      // VALIDA SE EXISTE O CPF_CNPJ JÁ EXISTE
      if(verificarCpf_CnpjUsuario) {
        throw new Error("CPF ou CNPJ já existe")
      }

      // CRIA O PRODUTOR
      const produtor = repositorioProdutor.create({
        nome, cpf_cnpj
      })

      // SALVA O USUÁRIO NO BANCO DE DADOS	
      await repositorioProdutor.save(produtor)

      return produtor
			
		// } catch (error) {
		// 	  return error
		// }
	}
}

export {ServicoCriarProdutor}