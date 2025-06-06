import express from 'express';
import sequelize from "./config/database.js";
import routerApi from "./routes/index.js";
import {exceptionHandlerMiddleware} from "./middlewares/exceptionHandler.middleware.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
routerApi(app);
app.use(exceptionHandlerMiddleware);

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});