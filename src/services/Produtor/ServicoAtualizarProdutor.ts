import { getCustomRepository } from "typeorm";
import { RepositorioProdutor } from "../../repositories/RepositorioProdutor";

interface IProdutorRequest {
  id: string;
  nome: string;
  cpf_cnpj: string;
}

class ServicoAtualizarProdutor {
  async execute({ id, nome, cpf_cnpj }: IProdutorRequest) {
    const repositorioProdutor = getCustomRepository(RepositorioProdutor);

    try {
      if (!nome || !cpf_cnpj) {
        throw new Error("Campos obrigatórios não preenchidos");
      }

      const produtor = await repositorioProdutor.findOne(id);

      if (!produtor) {
        throw new Error("Produtor não encontrado");
      }

      produtor.nome = nome ? nome : produtor.nome;
      produtor.cpf_cnpj = cpf_cnpj ? cpf_cnpj : produtor.cpf_cnpj;

      await repositorioProdutor.save(produtor);

      return produtor;
    } catch (error) {
      return error;
    }
  }
}

export { ServicoAtualizarProdutor };
