import { getCustomRepository } from "typeorm";
import { RepositorioUsuario } from "../../repositories/RepositorioUsuario";
import { hash } from "bcryptjs";

interface IUsuarioRequest {
  nome: string;
  email: string;
  admin?: boolean;
  senha: string;
}

class ServicoCriarUsuario {
  async execute({ nome, email, admin = false, senha }: IUsuarioRequest) {
    const repositorioUsuario = getCustomRepository(RepositorioUsuario);

    if (!email || !nome || !senha) {
      throw new Error("Campos obrigatórios não preenchidos");
    }

    const verificarEmailUsuario = await repositorioUsuario.findOne({
      email,
    });

    if (verificarEmailUsuario) {
      throw new Error("Usário Já Existe");
    }

    const passwordHash = await hash(senha, 8);

    const user = repositorioUsuario.create({
      nome,
      email,
      admin,
      senha: passwordHash,
    });

    await repositorioUsuario.save(user);

    console.log(user);

    return user;
  }
}

export { ServicoCriarUsuario };
