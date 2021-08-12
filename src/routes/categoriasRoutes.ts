import { Router } from 'express';
import { controllersCategorias} from "../controllers/controllersCategorias";
import { checkJwt } from '../middlewares/jwt';
class CategoriaRoutes {
    public router: Router = Router();
    constructor() { 
        this.config();
    }

    config(): void {
        this.router.get('/', /*[checkJwt],*/ controllersCategorias.lista);
        this.router.get('/listaByUsuario/:username', /*[checkJwt],*/ controllersCategorias.listaByUsuario);
        this.router.get('/', [checkJwt], controllersCategorias.lista);
        this.router.put('/', /*[checkJwt],*/ controllersCategorias.insert);
        this.router.post('/', controllersCategorias.update);
        this.router.delete('/:cveCategoria'/*, [checkJwt]*/, controllersCategorias.delete)
        



    }

}
const categoriasRoutes = new CategoriaRoutes();
export default categoriasRoutes.router;