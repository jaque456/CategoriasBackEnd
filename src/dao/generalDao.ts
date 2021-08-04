import pool from "../database/database";

class GeneralDao {

    public async tipo() {
        const result = await pool.then(async (connection) => {
            return await connection.query("SELECT cveTipo, nombre FROM tipo")
        });

        return result;
    }

}
 export const dao = new GeneralDao(); 