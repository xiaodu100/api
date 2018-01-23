const config = require("./mssql.config");
const sql = require("mssql");

const query = async sqlStr => {
    const pool = await sql.connect(config);
    const result = await pool.request().query(sqlStr);
    await sql.close();
    return {
        rows: result.rowsAffected[0],
        header: result.recordset.length === 0 ? [] : Object.keys(result.recordset[0]),
        data: result.recordset
    };
};

module.exports = { query };