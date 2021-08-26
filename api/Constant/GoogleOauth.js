import passport from 'passport'
import passportGoogle from 'passport-google-oauth20'

// function setupGoogleStrategy () {
//     const passportConfig = {
//         callbackURL: '/auth/google/redirect',
//         clientID: '510636162811-66lvpk401d7hssgrnln9hsm1ea75r9f2.apps.googleusercontent.com',
//         clientSecret: '1f0lBnIFJKgQkMNOOkL3ndQ9',
//     }
//
//     const provider = 'google'
//
//     passport.use(
//         new passportGoogle.Strategy(passportConfig, async function (
//             accessToken,
//             refreshToken,
//             profile,
//             done
//         ) {
//             try {
//                 const { id } = profile
//                 const email = profile.emails[0].value
//                 console.log(email)
//                 // let user = await User.findOrCreate(email, id, provider, profile)
//                 done(null, user)
//             } catch (e) {
//                 done(e)
//             }
//         })
//     )
// }
//
// export default function () {
//     setupGoogleStrategy()
// }




export const google_auth = {
    'googleAuth' : {
        'clientID': '510636162811-66lvpk401d7hssgrnln9hsm1ea75r9f2.apps.googleusercontent.com',
        'clientSecret': '1f0lBnIFJKgQkMNOOkL3ndQ9',
        'callbackURL': 'http://localhost:'+process.env.PORT
    },
}