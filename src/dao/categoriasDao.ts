import pool from "../database/database";
class CategoriaDao {
    public async listaByUsuario(username: string) {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, cveCategoria, nombreCategoria, descripcion, tipo, cveTipo, nombreTipo FROM usuario JOIN categoria ON usuario.cveUsuario = categoria.cveRegistro JOIN tipo ON categoria.tipo = tipo.cveTipo WHERE usuario.username = ?", [username]);
        });
        return result;
    }
    public async lista() {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, cveCategoria, nombreCategoria, tipo, cveTipo, nombreTipo, descripcion  FROM usuario JOIN categoria ON usuario.cveUsuario = categoria.cveRegistro JOIN tipo ON categoria.tipo = categoria.tipo");
        });

        return result;
    }

    public async insert(categoria: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("INSERT INTO categoria SET ?", [categoria]);
        });
        return result;

    }

    public async update(categoria: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("UPDATE categoria SET ? WHERE cveCategoria = ?", [categoria, categoria.cveCategoria]);
        });
        return result;

    }
    public async delete(cveCategoria: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query("DELETE FROM categoria WHERE cveCategoria = ?", [cveCategoria]);
        });

        return result; 
    }


}

export const categoriaDao = new CategoriaDao(); 