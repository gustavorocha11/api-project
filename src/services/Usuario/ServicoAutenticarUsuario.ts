import { getCustomRepository } from "typeorm";
import { RepositorioUsuario } from "../../repositories/RepositorioUsuario";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAutenticacaoRequest {
  email: "string";
  senha: "string";
}

class ServicoAutenticarUsuario {
  async execute({ email, senha }: IAutenticacaoRequest) {
    const repositorioUsuario = getCustomRepository(RepositorioUsuario);

    try {
      const validaEmail = await repositorioUsuario.findOne({
        email,
      });

      if (!validaEmail) {
        throw new Error("DADOS INVÁLIDOS");
      }

      const passwordMatch = await compare(senha, validaEmail.senha);

      if (!passwordMatch) {
        throw new Error("DADOS INVÁLIDOS");
      }

      const token = sign(
        {
          email: validaEmail.email,
        },

        "66cc811a6dcbf1b64c69edacbf53e53d",
        {
          subject: validaEmail.id,
          expiresIn: "1d",
        }
      );
      return token;
    } catch (error) {
      return error;
    }
  }
}

export { ServicoAutenticarUsuario };
