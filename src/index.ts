import express , { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors'
import usuarioRoutes from './routes/usuarioRoutes';
import authRoutes from './routes/authRoutes';
import generalRoutes from './routes/generalRoutes';
import categoriasRoutes from './routes/categoriasRoutes';


class Server {

    public app: Application;

    // Constructor de nuestro servidor
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    // Configuración del servidor
    config(): void {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    // Rutas para mi APIRest
    roures(): void {}
    routes(): void {
        this.app.use('/usuario',usuarioRoutes);
        this.app.use('/auth', authRoutes);
        this.app.use('/general', generalRoutes);
        this.app.use('/categoria', categoriasRoutes);
    }

    // Inicialización del servidor
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port", this.app.get('port'));
        });
    }
 
}

const server = new Server();
server.start();