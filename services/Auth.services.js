import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {UserServices} from "./User.services.js";
import bcrypt from "bcrypt";
import {ValidationException} from "../exceptions/Validation.exception.js";
import {userTransformer} from "../transformers/user.transformer.js";
import {NotFoundException} from "../exceptions/NotFound.exception.js";
dotenv.config();

export class AuthServices {
    static async login(email, password) {

        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        try {
            const user = await new UserServices().findByEmail(email);

            await this.assertPassword(user, password);

            let data = {
                time: Date(),
                userId: user.id,
            }

            const token = jwt.sign(data, jwtSecretKey);

            return {token: token}

        }catch (e) {
            if (e instanceof NotFoundException) {
                throw new ValidationException([
                    {
                        message: "The email does not exist",
                        path: ["email"]
                    }
                ]);
            }

            throw e;
        }
    }

    static async assertPassword(user, password) {
        let passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new ValidationException([
                {
                    message: "The password is incorrect",
                    path: ["password"]
                }
            ]);
        }
    }
}