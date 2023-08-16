import { getCustomRepository } from "typeorm"
import { RepositorioUsuario } from "../../repositories/RepositorioUsuario"
import {compare, hash} from "bcryptjs"
import {sign} from "jsonwebtoken"

// INTERFACE COM OS DADOS DA TABELA USUÁRIO
interface IAutenticacaoRequest {
	email: 'string',
	senha: 'string',
}

// MÉTODO EXECUTE, RECEBE OS PARAMETROS EMAIL E SENHA VINDOS DA INTERFACE
class ServicoAutenticarUsuario {
	async execute({email, senha}: IAutenticacaoRequest){

		// Inicializa o repositório de usuários
		const repositorioUsuario = getCustomRepository(RepositorioUsuario)

		try {

      // BUSCA PELO EMAIL DIGITAL NA BASE DA DADOS
      const validaEmail = await repositorioUsuario.findOne({
        email
      })
  
      // VALIDA SE EXISTE O EMAIL DIGITADO ESTÁ CORRETO
      if(!validaEmail) {
        throw new Error("DADOS INVÁLIDOS")
      }
  
      // DESCRIPTOGRAFAR SENHA, COMPARAR, RETORNAR TRUE OU FALSE
      const passwordMatch = await compare(senha, validaEmail.senha)
  
      // VÁLIDA SE A SENHA DIGITADA ESTÁ CORRETA
      if(!passwordMatch){
        throw new Error("DADOS INVÁLIDOS")
      }
  
      // GERA O TOKEN COM HASH MD5 E TEMPO DE EXPIRAÇÃO DE 1 DIA
      const token = sign(
        {
        email: validaEmail.email,
        },
        
        "66cc811a6dcbf1b64c69edacbf53e53d", 
        {
          subject: validaEmail.id,
          expiresIn: "1d"
        }
      )
      return token	

		} catch (error) {
        return error
		}
	}
}

export {ServicoAutenticarUsuario}