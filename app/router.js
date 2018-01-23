"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get("/", controller.home.index);
    // router.get("/api", controller.api.index);
    // router.get("/api/list", controller.api.apiList);
    // router.get("/api/test", controller.api.apiMSSql);

    // router.get('/news', controller.news.mssql);
    router.get('/api', controller.news.mysql);
};