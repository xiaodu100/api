"use strict";

module.exports = appInfo => {
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1515489143129_7850";

    // add your config here
    config.middleware = [];

    config.mysql = {
        // database configuration
        client: {
            // host
            host: "localhost",
            // port
            port: "3306",
            // username
            user: "root",
            // password
            password: "root",
            // database
            database: "api"
        },
        // load into app, default is open
        app: true,
        // load into agent, default is close
        agent: false
    };
    return config;
};