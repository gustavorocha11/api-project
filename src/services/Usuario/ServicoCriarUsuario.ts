import { getCustomRepository } from "typeorm"
import { RepositorioUsuario } from "../../repositories/RepositorioUsuario"
import {hash} from "bcryptjs"

// INTERFACE COM OS DADOS DA TABELA USUÁRIO
interface IUsuarioRequest {
	nome: string,
	email: string,
	admin?: boolean,
	senha: string,
}

// MÉTODO EXECUTE, RECEBE OS PARAMETROS {NAME. EMAIL, ADMIN VINDOS DA INTERFACE}
class ServicoCriarUsuario {

	async execute({nome, email, admin = false, senha}
		: IUsuarioRequest){
		// Inicializa o repositório
		const repositorioUsuario = getCustomRepository(RepositorioUsuario)

		// try {
			// VALIDA SE EXISTE EMAIL
		if(!email || !nome || !senha){
			throw new Error("Campos obrigatórios não preenchidos")
		}

		// BUSCA PELO EMAIL
		const verificarEmailUsuario = await repositorioUsuario.findOne({
			email
		})

		// VALIDA SE EXISTE O EMAIL JÁ EXISTE
		if(verificarEmailUsuario) {
			 throw new Error("Usário Já Existe")
		}

		// CRIPTOGRAFAR SENHA
		const passwordHash = await hash(senha, 8)

		// CRIA O USUÁRIO
		const user = repositorioUsuario.create({
			nome,
			email,
			admin,
			senha: passwordHash
		})

		// SALVA O USUÁRIO NO BANCO DE DADOS	
		await repositorioUsuario.save(user)

		console.log(user)

		return user
		// } catch (error) {
        // return error
		// }
		
	}
}

export {ServicoCriarUsuario}