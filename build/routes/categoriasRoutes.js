"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllersCategorias_1 = require("../controllers/controllersCategorias");
var jwt_1 = require("../middlewares/jwt");
var CategoriaRoutes = /** @class */ (function () {
    function CategoriaRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    CategoriaRoutes.prototype.config = function () {
        this.router.get('/', /*[checkJwt],*/ controllersCategorias_1.controllersCategorias.lista);
        this.router.get('/listaByUsuario/:username', /*[checkJwt],*/ controllersCategorias_1.controllersCategorias.listaByUsuario);
        this.router.get('/', [jwt_1.checkJwt], controllersCategorias_1.controllersCategorias.lista);
        this.router.put('/', /*[checkJwt],*/ controllersCategorias_1.controllersCategorias.insert);
        this.router.post('/', controllersCategorias_1.controllersCategorias.update);
        this.router.delete('/:cveCategoria' /*, [checkJwt]*/, controllersCategorias_1.controllersCategorias.delete);
    };
    return CategoriaRoutes;
}());
var categoriasRoutes = new CategoriaRoutes();
exports.default = categoriasRoutes.router;
