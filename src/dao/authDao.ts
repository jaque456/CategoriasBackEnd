import pool from '../database/database'
class AuthDAO {

    public async getUser(usuario: string) {
        const result = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, password, cveCategoria, nombreCategoria, descripcion, tipo, cveTipo, nombreTipo  FROM usuario LEFT JOIN categoria ON usuario.cveUsuario = categoria.cveRegistro LEFT JOIN tipo ON categoria.tipo = tipo.cveTipo WHERE usuario.username = ?", [usuario]);
        });

        return result;
    }
    public async getUserById(cveUsuario: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query('SELECT * FROM usuario WHERE cveUsuario = ?', [cveUsuario]);
        });
        return result;
    }
}
export const dao = new AuthDAO();