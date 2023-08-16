// ARQUIVO PARA VALIDAR A AUTENTICAÇÃO DO USUÁRIO

import { Request, Response, NextFunction } from "express"
import {verify} from "jsonwebtoken"

interface IPayload {
  sub: string
}   

export function autenticacao(
    request: Request, 
    response: Response, 
    next:NextFunction)
    
  {
 
  // RECEBER O TOKEN VIA BEARER TOKEN E PELO HEADERS
  const authToken = request.headers.authorization

  // VÁLIDA O TOKEN PREENCHIDO
  if(!authToken){
    return response.status(401).json(" ATENÇÃO !!! TOKEN NÃO PREENCHIDO")
  }

  // VERIFICAR SE O TOKEN É VÁLIDO E DIVIDE A STRING COM O SPLIT
  const [, token] = authToken.split(" ")

  try {
    const {sub} = verify(
      token, 
      "66cc811a6dcbf1b64c69edacbf53e53d"
      ) as IPayload

    request.user_id = sub

    return next()
    
  } catch (error) {
    return response.status(401).json("Falha na validão do TOKEN,")

  }

}