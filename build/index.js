"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var Server = /** @class */ (function () {
    // Constructor de nuestro servidor
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    // Configuración del servidor
    Server.prototype.config = function () {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    // Rutas para mi APIRest
    Server.prototype.routes = function () { };
    // Inicialización del servidor
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log("Server on port", _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
