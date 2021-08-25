import {test_key} from "../Constant";
import jwt from 'jsonwebtoken'

export const createJWT = (payload) => {
    console.log(payload)
    return jwt.sign(
        {
            iss: "test",
            ...payload,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        },
        test_key.secret_key
    );
};
