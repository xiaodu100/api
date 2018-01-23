"use strict";

const Controller = require("egg").Controller;
const mssql = require("../lib/mssql");

class ApiController extends Controller {
    async index() {
        this.ctx.body = {
            status: 200,
            data: [{
                name: "zhangsan",
                age: 21
            }]
        };
    }
    async apiList() {
        const data = await this.app.mysql.query("select * from sys_api");
        const header = (() => {
            if (data.length == 0) {
                return [];
            }
            return Object.keys(data[0]);
        })();

        this.ctx.body = {
            rows: data.length,
            header,
            data
        };
    }
    async apiMSSql() {
        const data = await mssql.query("select * from tblApi");

        this.ctx.body = data;
    }
}

module.exports = ApiController;