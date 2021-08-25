import jwt from 'jsonwebtoken';
import {test_key} from "../Constant";
import {} from ""

export const verifyJwtToken = async (bearerHeader) => {
    // console.log("choler --------------------------------",bearerHeader)
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const jwtToken = bearer[1];
        console.log(bearerHeader)

        // console.log(bearerHeader)
        if (!jwtToken) {
            return {
                status: 403
            };
        }


        try {
            const data = await jwt.verify(jwtToken, test_key.secret_key);
            if (!data) {
                // console.log("error here")
                return {
                    status: 403,
                    msg: UNAUTHORIZED
                };
            }
            return data;
        } catch (error) {
            // console.log(error)
            return {
                status: 403,
                msg: UNAUTHORIZED
            };
        }
    } else {

        return {
            status: 403,
            msg: UNAUTHORIZED
        };
    }
};