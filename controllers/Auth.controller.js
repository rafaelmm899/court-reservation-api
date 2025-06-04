import {AuthServices} from "../services/Auth.services.js";
import {loginTransformer} from "../transformers/login.transfomer.js";

export class AuthController {
    static async login(req, res) {
        const {token} = await AuthServices.login(req.body.email, req.body.password);

        res.json(loginTransformer(token));
    }
}