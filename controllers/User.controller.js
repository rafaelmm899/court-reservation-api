import {UserServices} from "../services/User.services.js";
import {userTransformer} from "../transformers/user.transformer.js";

export class UserController {
    static async create(req, res) {
        const data = await new UserServices().create(req.body);
        res.json(userTransformer(data));
    }

    static async userLogged(req, res) {
        res.json(userTransformer(req.user));
    }
}