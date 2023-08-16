import { getCustomRepository } from "typeorm";
import { RepositorioProdutor } from "../../repositories/RepositorioProdutor";

class ServicoListarProdutor {
  async execute() {
    try {
      const repositorioProdutor = getCustomRepository(RepositorioProdutor);
      const produtor = await repositorioProdutor.find();
      return produtor;
    } catch (error) {
      return error;
    }
  }
}

export { ServicoListarProdutor };
