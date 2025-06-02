import {UserServices} from "../services/User.services.js";

export class UserController {
    static async create(req, res) {
        const data = await new UserServices().create(req.body);
        res.json(data);
    }
}