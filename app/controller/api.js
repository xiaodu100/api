'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
    async index() {
        this.ctx.body = 'hi, api';
    }

    async newsList() {
        // db

        let query = this.ctx.query;

        this.ctx.body = {
            query,
            ctx: this.ctx
        };
    }
}

module.exports = ApiController;