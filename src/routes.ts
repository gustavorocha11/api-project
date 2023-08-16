import {autenticacao} from "./middlewares/Autenticacao"
import {usuarioAdmin} from "./middlewares/ValidacaoUsuarioAdm"

import {Router} from "express"
import {ControladorCriarUsuario} from "./controllers/Usuario/ControladorCriarUsuario"
import {ControladorAutenticarUsuario} from "./controllers/Usuario/ControladorAutenticarUsuario"
import {ControladorListarUsuario} from "./controllers/Usuario/ControladorListarUsuario"

import {ControladorCriarProdutor} from "./controllers/Produtor/ControladorCriarProdutor"
import {ControladorListarProdutor} from "./controllers/Produtor/ControladorListarProdutor"
import {ControladorAtualizarProdutor} from "./controllers/Produtor/ControladorAtualizarProdutor"
import {ControladorDeletarProdutor} from "./controllers/Produtor/ControladorDeletarProdutor"

import {ControladorCriarEndereco} from "./controllers/Endereco/ControladorCriarEndereco"
import {ControladorAtualizarEndereco} from "./controllers/Endereco/ControladorAtualizarEndereco"
import {ControladorListarEndereco} from "./controllers/Endereco/ControladorListarendereco"
import {ControladorDeletarEndereco} from "./controllers/Endereco/ControladorDeletarEndereco"

import {ControladorCriarCultura} from "./controllers/Cultura/ControladorCriarCultura"
import {ControladorListarCultura} from "./controllers/Cultura/ControladorListarCultura"
import {ControladorAtualizarCultura} from "./controllers/Cultura/ControladorAtualizarCultura"
import {ControladorDeletarCultura} from "./controllers/Cultura/ControladorDeletarCultura"

import {ControladorCriarFazenda} from "./controllers/Fazenda/ControladorCriarFazenda"
import {ControladorListarFazenda} from "./controllers/Fazenda/Dashboard/ControladorListarFazenda"
import {ControladorListarTotalFazenda} from "./controllers/Fazenda/Dashboard/ControladorListarTotalFazenda"
import {ControladorListarTotalHectarFazenda} from "./controllers/Fazenda/Dashboard/ControladorListarTotalHectarFazenda"
import {ControladorListarTotalHectarFazendaEstado} from "./controllers/Fazenda/Dashboard/ControladorListarTotalHectarFazendaEstado"
import {ControladorListarTotalHectarFazendaCultivo} from "./controllers/Fazenda/Dashboard/ControladorListarTotalHectarFazendaCultivo"
import {ControladorListarAgricTotalHectarFazenda} from "./controllers/Fazenda/Dashboard/ControladorListarAgricTotalHectarFazenda"
import {ControladorListarVegeTotalHectarFazenda} from "./controllers/Fazenda/Dashboard/ControladorListarVegeTotalHectarFazenda"

const router = Router()

/* Controlador - USUÁRIOS */
const createUserController = new ControladorCriarUsuario()
const controladorAutenticarUsuario = new ControladorAutenticarUsuario()
const controladorListarUsuario = new ControladorListarUsuario()

/* Controlador - PRODUTOR */
const controladorCriarProdutor = new ControladorCriarProdutor()
const controladorListarProdutor = new ControladorListarProdutor()
const controladorAtualizarProdutor = new ControladorAtualizarProdutor()
const controladorDeletarProdutor = new ControladorDeletarProdutor()

/* Controlador - ENDEREÇO */
const controladorCriarEndereco = new ControladorCriarEndereco()
const controladorAtualizarEndereco = new ControladorAtualizarEndereco()
const controladorListarEndereco = new ControladorListarEndereco()
const controladorDeletarEndereco = new ControladorDeletarEndereco()

/* Controlador - CULTURA */
const controladorCriarCultura = new ControladorCriarCultura()
const controladorListarCultura = new ControladorListarCultura()
const controladorAtualizarCultura = new ControladorAtualizarCultura()
const controladorDeletarCultura = new ControladorDeletarCultura()

/* Controlador - FAZENDA */
const controladorCriarFazenda = new ControladorCriarFazenda()
const controladorListarFazenda = new ControladorListarFazenda()
const controladorListarTotalFazenda = new ControladorListarTotalFazenda()
const controladorListarTotalHectarFazenda = new ControladorListarTotalHectarFazenda()
const controladorListarTotalHectarFazendaEstado = new ControladorListarTotalHectarFazendaEstado()
const controladorListarTotalHectarFazendaCultivo = new ControladorListarTotalHectarFazendaCultivo()
const controladorListarAgricTotalHectarFazenda = new ControladorListarAgricTotalHectarFazenda
const controladorListarVegeTotalHectarFazenda = new ControladorListarVegeTotalHectarFazenda


/* MIDDLEWARES = USUÁRIOS */
router.post("/usuario",        usuarioAdmin, createUserController.handle)
router.post("/login",          controladorAutenticarUsuario.handle)
router.get("/usuario",          controladorListarUsuario.handle)

/* Rotas = PRODUTOR */
router.post("/produtor",       autenticacao, controladorCriarProdutor.handle)
router.get("/produtor",        autenticacao, controladorListarProdutor.handle)
router.put("/produtor/:id",    autenticacao, controladorAtualizarProdutor.handle)
router.delete("/produtor/:id", autenticacao, controladorDeletarProdutor.handle)


/* Rotas = ENDEREÇO */
router.post("/endereco",       autenticacao, controladorCriarEndereco.handle)
router.get("/endereco",        autenticacao, controladorListarEndereco.handle)
router.put("/endereco/:id",    autenticacao, controladorAtualizarEndereco.handle)
router.delete("/endereco/:id", autenticacao, controladorDeletarEndereco.handle)

/* Rotas = CULTURA */

router.post("/cultura",         autenticacao, controladorCriarCultura.handle)
router.get("/cultura",          autenticacao, controladorListarCultura.handle)
router.put("/cultura/:id",      autenticacao, controladorAtualizarCultura.handle)
router.delete("/cultura/:id",   autenticacao, controladorDeletarCultura.handle)


/* Rotas = FAZENDA */
router.post("/fazenda",                        autenticacao, controladorCriarFazenda.handle)
router.get("/fazenda",                         autenticacao, controladorListarFazenda.handle)
router.get("/totalfazenda",                    autenticacao, usuarioAdmin, controladorListarTotalFazenda.handle)
router.get("/totalHectarFazenda",              autenticacao, usuarioAdmin, controladorListarTotalHectarFazenda.handle)
router.get("/totalHectarFazendaEstado",        autenticacao, usuarioAdmin, controladorListarTotalHectarFazendaEstado.handle)
router.get("/totalHectarFazendaCultura",       autenticacao, usuarioAdmin, controladorListarTotalHectarFazendaCultivo.handle)
router.get("/totalHectarFazendaCulturaAgric",  autenticacao, usuarioAdmin, controladorListarAgricTotalHectarFazenda.handle)
router.get("/totalHectarFazendaCulturaVeget",  autenticacao, usuarioAdmin, controladorListarVegeTotalHectarFazenda.handle)


export {router}