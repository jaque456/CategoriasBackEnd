import { request, Request, Response } from 'express';
import { categoriaDao} from '../dao/categoriasDao';
class MascotasController {
    public async lista(req: Request, res: Response) {
        try {
            const result = await categoriaDao.lista();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    public async listaByUsuario(req: Request, res: Response) {
        try {
            const { username } = req.params;
            if(username == null){
                return res.status(400).json({ message : "No se puede eliminar" });
            }

            const result = await categoriaDao.listaByUsuario(username);
            res.json(result);

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    public async insert (req: Request, res: Response) {
        try {
            const {nombreCategoria, descripcion, cveRegistro, tipo} = req.body;
            if(nombreCategoria == null || descripcion == null || cveRegistro == null || tipo  == null){
                return res.status(400).json({ meesage : "Los datos son requeridos" });
            }
            const categoria = {
                nombreCategoria,
                descripcion,
                cveRegistro,
                tipo,
            }
            const result = await categoriaDao.insert(categoria);
            if(result.affectedRows > 0){
                return res.json({ message : "¡Registro completado!" });
            } else  {
                return res.status(400).json({ message : result.message });
            }
        } catch (ex) {
            res.status(500).json({ message: ex.message });
        }
    }

    public async update (req:  Request, res: Response){
        try {
            const categoria = req.body;

            if(categoria.cveCategoria == null){
                return res.status(400).json({ meesage : "No se puede actualizar" });
            }

            const result = await categoriaDao.update(categoria);

            if(result.affectedRows > 0){
                return res.json({ message : "!Se Actualizo correctamente¡" });
            } else  {
                return res.status(400).json({ meesage : result.message });
            }

        } catch (ex) {
            res.status(500).json({ message: ex.message });
        }
    }
    public async delete(req: Request, res: Response){
        try {
            const { cveCategoria } = req.params;

            if(cveCategoria == null){
                return res.status(400).json({ message : "¡No se puede eliminar!" });
            }

            const result = await categoriaDao.delete(parseInt(cveCategoria));

            if(result.affectedRows > 0){
                res.json({ message : "¡Se borro de forma correcta!" })
            } else  {
                res.status(400).json({ message : result.message });
            }
        } catch (error) {
            res.status(400).json({ message : error.message });
        }
    }
}



export const controllersCategorias = new MascotasController();
