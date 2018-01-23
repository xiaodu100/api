'use strict';

const Controller = require('egg').Controller;

const sql = require('mssql')

class NewsController extends Controller {
    async mssql() {
        const config = {
            user: 'sa',
            password: '123456',
            server: '127.0.0.1\\DUZJ2016', // You can use 'localhost\\instance' to connect to named instance
            database: 'anfang',

            // options: {
            //     encrypt: true // Use this if you're on Windows Azure
            // }
        }
        const pool = await sql.connect(config)

        const result = await sql.query("SELECT a.BatchId,a.ResultTime FROM batchinfo a where DATE_FORMAT(a.ResultTime,'%Y%m%d') between ? and ?", ['20171201', '20171217'])
        await sql.close();
        console.log(result);
        this.ctx.body = result;
    }

    async mysql() {
        let query = this.ctx.query;

        let data = await this.app.mysql.query("SELECT DATE_FORMAT(a.ResultTime,'%Y-%m-%d %h:%i:%s') name,SPConc value FROM batchinfo a where DATE_FORMAT(a.ResultTime,'%Y%m%d') between ? and ?", [query.tstart, query.tend]);
        this.ctx.body = data;
    }
}

module.exports = NewsController;