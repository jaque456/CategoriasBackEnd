"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarioControllers_1 = require("../controllers/usuarioControllers");
// import { checkJwt } from '../middleware/jwt';
var UsuarioRoutes = /** @class */ (function () {
    function UsuarioRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    UsuarioRoutes.prototype.config = function () {
        this.router.put('/', /*[checkJwt],*/ usuarioControllers_1.usuarioController.insert);
    };
    return UsuarioRoutes;
}());
var usuariosRoutes = new UsuarioRoutes();
exports.default = usuariosRoutes.router;
