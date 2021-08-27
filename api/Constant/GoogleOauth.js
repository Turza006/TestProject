export const google_auth = {
    'googleAuth' : {
        'clientID': process.env.GoogleclientID,
        'clientSecret': process.env.GoogleclientSecret,
        'callbackURL': 'http://localhost:'+process.env.PORT
    },
}