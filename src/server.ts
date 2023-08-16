/**
 *
 * GET - Server Application
 * SET - JSON
 *
 */
require("dotenv/config");
import "reflect-metadata";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import "./database";

const app = express();

/* Set Json */
app.use(express.json());

/* Setar Rotas */
app.use(router);

// Apresentar mensagens de retorno na tela
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.get("/terms", (request, response) => {
  return (
    response.json({
      Termos: "Termos de Serviço da Aplicação de Teste para vaga de NODEJS!",
    }),
    console.log("cheguei aqui")
  );
});

/* Set Server Application */
app.listen(process.env.SERVER_PORT, () => {
  console.log(`NodeJs Server Running on port: 3000`);
});
