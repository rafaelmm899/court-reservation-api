import models from "../db/models/index.js";

export class UserServices {
    async create(data) {
        console.log(data);

        return await models.User.create(data);
    }
}