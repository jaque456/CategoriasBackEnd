import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import secretKey from '../config/jwtkey';
import { dao } from '../dao/authDao';
// import { categoriaDao } from '../dao/categoriasDao'
import { utils } from '../utils/utils';
class AuthController {
    /**
    * Nombre: Login
    * Descripcion: metodo que comprueba los datos de acceso del usuario 
    */
    public async login(req: Request, res: Response) {
        const { username, password, nombre, apellidos } = req.body;
        console.log(username, password);
        // console.log(username, password);
        if (username == null || password == null) {
            return res.status(400).json({ message: "Usuario y contraseña  incorrecta" });
        }

        const users = await dao.getUser(username);
        // const categoria = await categoriaDao.listaByUsuario(username);
        // const mascotas = await daoMascotas.listaByUsuario(username);

        // if(categoria.length <= 0) {
        //     return res.status(400).json({ message: "Las Categorias no estan Registradas" });
        // }
        // if(mascotas.length <= 0) {
        //     return res.status(400).json({ message: "Usted no tiene mascotas en adopcion favor de comunicarse con la sucursal" });
        // }

        // Verificar si existe el usuario
        if (users.length <= 0) {
            return res.status(400).json({ message: "El usuario no existe" });
        }

        console.log(users);


        for(let user of users) {
            if(await utils.checkPassword(password, user.password)){
                const token = jwt.sign({cveUsuario : user.cveUsuario, username}, secretKey.jwtSecret, {expiresIn : '1h'});
                return res.json({ message : "OK", token, cveUsuario : user.cveUsuario, username,  nombre: user.nombre, apellidos: user.apellidos, nombreCategoria: user.nombreCategoria, nombreTipo: user.nombreTipo});
            } else {
                return res.status(400).json({message : "La contraseña es incorrecta"});
            }
        }
        // for (let user of users) {
        //     if (await utils.checkPassword(password, user.password)) {
        //         for (let mascota of mascotas) {
        //             if(mascota == null){
        //                 const token = jwt.sign({ cveUsuario: user.cveUsuario, username }, secretKey.jwtSecret, { expiresIn: '1h' });
        //             return res.json({ message: "OK", token, cveUsuario: user.cveUsuario, username, nombre: user.nombre, apellidos: user.apellidos });
        //             } else {
        //                 const token = jwt.sign({ cveUsuario: user.cveUsuario, username }, secretKey.jwtSecret, { expiresIn: '1h' });
        //             return res.json({ message: "OK", token, cveUsuario: user.cveUsuario, username, nombre: user.nombre, apellidos: user.apellidos, nombreMascota: mascota.nombreMascota, nomRaza: mascota.nomRaza, descripcion: mascota.descripcion });
        //             }
                    
        //         }
        //     } else {
        //         return res.status(400).json({ message: "La contraseña es incorrecta" });
        //     }
        // }
    }
}
export const authController = new AuthController();