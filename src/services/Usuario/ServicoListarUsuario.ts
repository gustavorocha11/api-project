import { getCustomRepository } from "typeorm";
import { RepositorioUsuario } from "../../repositories/RepositorioUsuario";

class ServicoListarUsuario {
  async execute() {
    try {
      const repositorioUsuario = getCustomRepository(RepositorioUsuario);
      const usuario = await repositorioUsuario.find();
      return usuario;
    } catch (error) {
      return error;
    }
  }
}

export { ServicoListarUsuario };
