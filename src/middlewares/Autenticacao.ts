import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function autenticacao(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json(" ATENÇÃO !!! TOKEN NÃO PREENCHIDO");
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "66cc811a6dcbf1b64c69edacbf53e53d"
    ) as IPayload;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json("Falha na validão do TOKEN,");
  }
}
