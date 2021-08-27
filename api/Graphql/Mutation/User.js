// const {OAuth2Client} = require('google-auth-library');
import {createJWT} from "../../Helper/JWTCreator";
import {User} from "../../Models/User";
import {google_auth} from "../../Constant/GoogleOauth";


export const UserLoginByGoogle = async (parent, args, ctx, req)=>{
    const ticket = await client.verifyIdToken({
        idToken: args.googleToken,
        audience: google_auth.googleAuth.clientID})
    const payload = ticket.getPayload();
    console.log(payload)

    const user = await User.findOne({email: payload.email}, {
        email: 1,
        userName: 1,
        _id: 1,
        status: 1
    })
    if (user) {

        const jwt = await createJWT("User", user._id)
        user.jwt = jwt
    } else {
        const newUser = new User(payload);
        newUser.status = "Active"
        const jwt = await createJWT("User", newUser._id)
        await newUser.save()
        newUser.jwt = jwt.jwt
    }
    user.msg = SUCCESS
    user.code = SUCCESS
    return user;
}