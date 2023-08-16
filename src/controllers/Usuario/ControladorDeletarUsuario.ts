import { Request, Response } from "express";
import { ServicoDeletarUsuario } from "../../services/Usuario/ServicoDeletarUsuario";

class ControladorDeletarUsuario {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const servicoDeletarUsuario = new ServicoDeletarUsuario();

      const usuario = await servicoDeletarUsuario.execute(id);

      if (usuario instanceof Error) {
        return response.status(400).json(usuario.message);
      }

      return response
        .json({
          mensagem: "Usuário Excluído Com Sucesso",
          usuario,
        })
        .status(200);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { ControladorDeletarUsuario };
