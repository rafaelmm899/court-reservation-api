import models from "../db/models/index.js";

export class UserServices {
    async create(data) {
        if (await models.User.findOne({ where: { email: data.email } })) {
            throw new Error('User already exists');
        }

        return await models.User.create(data);
    }

    async findOne(id) {
        return await models.User.findByPk(id);
    }
}