import { getCustomRepository } from "typeorm";
import { RepositorioUsuario } from "../../repositories/RepositorioUsuario";

class ServicoDeletarUsuario {
  async execute(id: string) {
    const repositorioUsuario = getCustomRepository(RepositorioUsuario);

    try {
      if (!(await repositorioUsuario.findOne(id))) {
        return new Error("Usuário não encontrado na base de dados");
      }

      await repositorioUsuario.delete(id);
    } catch (error) {
      return error;
    }
  }
}

export { ServicoDeletarUsuario };
