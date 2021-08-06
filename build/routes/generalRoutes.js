"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var generalController_1 = require("../controllers/generalController");
var GeneralRoutes = /** @class */ (function () {
    function GeneralRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    GeneralRoutes.prototype.config = function () {
        // Obtiene los roles activo en el sistema
        this.router.get('/tipo', generalController_1.generalController.tipo);
    };
    return GeneralRoutes;
}());
var generalRoutes = new GeneralRoutes();
exports.default = generalRoutes.router;
