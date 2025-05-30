import express from 'express';
import sequelize from "./config/database.js";
const app = express();
const port = process.env.PORT || 3000;


app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

});