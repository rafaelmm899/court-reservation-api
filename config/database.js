import {Sequelize} from 'sequelize';
import {app} from "./app.js";

const sequelize = new Sequelize(
    app.dbDatabase,
    app.dbUser,
    app.dbPassword,
    {
        host: app.dbHost,
        dialect: app.dbDialect,
        logging: console.log
    }
);

export default sequelize;