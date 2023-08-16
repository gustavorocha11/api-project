import { getCustomRepository } from "typeorm";
import { RepositorioProdutor } from "../../repositories/RepositorioProdutor";

interface IProdutorRequest {
  nome: string;
  cpf_cnpj: string;
}

class ServicoCriarProdutor {
  async execute({ nome, cpf_cnpj }: IProdutorRequest) {
    const repositorioProdutor = getCustomRepository(RepositorioProdutor);

    if (!nome || !cpf_cnpj) {
      throw new Error("Campos obrigatórios não preenchidos");
    }

    const verificarCpf_CnpjUsuario = await repositorioProdutor.findOne({
      cpf_cnpj,
    });

    if (verificarCpf_CnpjUsuario) {
      throw new Error("CPF ou CNPJ já existe");
    }

    const produtor = repositorioProdutor.create({
      nome,
      cpf_cnpj,
    });

    await repositorioProdutor.save(produtor);

    return produtor;
  }
}

export { ServicoCriarProdutor };
