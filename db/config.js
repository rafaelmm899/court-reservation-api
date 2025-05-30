import {app} from "../config/app.js";

const config = {
    development: {
        username: app.dbUser,
        password: app.dbPassword,
        database: app.dbDatabase,
        host: app.dbHost,
        dialect: app.dbDialect,
    },
    test: {
        username: app.dbUser,
        password: app.dbPassword,
        database: app.dbDatabase,
        host: app.dbHost,
        dialect: app.dbDialect,
    },
    production: {
        username: app.dbUser,
        password: app.dbPassword,
        database: app.dbDatabase,
        host: app.dbHost,
        dialect: app.dbDialect,
    },
}

export default config;