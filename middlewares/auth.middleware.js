import {UnauthenticatedException} from "../exceptions/Unauthenticated.exception.js";
import jwt from "jsonwebtoken";
import {UserServices} from "../services/User.services.js";

export async function authMiddleware(req, res, next) {
    if (!req.header('Authorization')) {
        throw new UnauthenticatedException();
    }

    if (!req.header('Authorization').split(' ')[0] === 'Bearer') {
        throw new UnauthenticatedException();
    }

    if (!req.header('Authorization').split(' ')[1]) {
        throw new UnauthenticatedException();
    }

    let token = req.header('Authorization').split(' ')[1];

    let userId = jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
        if (err) {
            throw new UnauthenticatedException();
        }

        return decoded;
    }).userId;

    if (!userId) {
        throw new UnauthenticatedException();
    }

    const user = await new UserServices().findOne(userId);

    if (!user) {
        throw new UnauthenticatedException();
    }

    req.user = await new UserServices().findOne(userId);

    return next();
}