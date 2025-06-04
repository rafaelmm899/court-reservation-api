import models from "../db/models/index.js";
import {NotFoundException} from "../exceptions/NotFound.exception.js";
import {ValidationException} from "../exceptions/Validation.exception.js";

export class UserServices {
    async create(data) {
        if (await models.User.findOne({ where: { email: data.email } })) {
            throw new ValidationException([
                {
                    message: "The email is already in use",
                    path: ["email"]
                }
            ]);
        }

        return await models.User.create(data);
    }

    async findOne(id) {
        return await models.User.findByPk(id);
    }

    async findByEmail(email) {
        const user = await models.User.findOne({ where: { email: email } });

        if (!user) {
            throw new NotFoundException();
        }

        return user;
    }


}