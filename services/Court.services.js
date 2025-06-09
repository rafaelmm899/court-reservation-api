import models from "../db/models/index.js";
import {ValidationException} from "../exceptions/Validation.exception.js";
import {NotFoundException} from "../exceptions/NotFound.exception.js";

export class CourtServices {
    async create(data){
        if (await models.Court.findOne({ where: { name: data.name } })) {
            throw new ValidationException([
                {
                    message: "The name is already in use",
                    path: ["name"]
                }
            ]);
        }

        return models.Court.create(data);
    }

    async findAll(page, perPage) {
        return models.Court.findAll({ offset: page, limit: perPage });
    }

    async findOne(id) {
        const court = await models.Court.findByPk(id);

        if (!court) {
            throw new NotFoundException();
        }

        return court;
    }

    async delete(id) {
        const court = await this.findOne(id);

        if (!court) {
            throw new NotFoundException();
        }

        await models.Court.destroy({ where: { id } });
    }
}