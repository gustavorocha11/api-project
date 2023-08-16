import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { RepositorioUsuario } from "../repositories/RepositorioUsuario";

export async function usuarioAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  try {
    const repositorioUsuario = getCustomRepository(RepositorioUsuario);
    const { admin } = await repositorioUsuario.findOne(user_id);

    if (admin) {
      return next();
    }

    return response.status(401).json({
      error: "Usuário não autorizado",
    });
  } catch (error) {
    return error;
  }
}
