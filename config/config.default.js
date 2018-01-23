"use strict";

module.exports = appInfo => {
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1515489143129_7850";

    // add your config here
    config.middleware = [];


    config.cors = {
        origin: ['http://localhost:1234'],
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    config.mysql = {
        // database configuration
        client: {
            // host
            host: "localhost",
            // port
            port: "3306",
            // username
            user: "admin",
            // password
            password: "",
            // database
            database: "pulpeye"
        },
        // load into app, default is open
        app: true,
        // load into agent, default is close
        agent: false
    };
    return config;
};