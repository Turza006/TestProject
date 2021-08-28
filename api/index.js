
const { ApolloServer, gql, PubSub } = require('apollo-server-express');
const express = require('express');
const db = require('./Constant/Database');
import {verifyJwtToken} from "./Helper/JWTValidation";
import {isAuthenticated} from "./Graphql/Directives";

require('dotenv').config();
import {typeDefs, resolvers} from './Graphql';




const app = express();
// app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }));
const server = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives: {
        isAuthenticated
    },
    context: async ({req,connection}) => {
        // const tokenEnsure = await ensureJWTToken(req);
        // const validateToken = await validateJWTToken(req, token.jwtToken)
        // console.log(req.headers["authorization"])
        if (connection) {
            // check connection for metadata
            return connection.context;
        }
        const jwtData = await verifyJwtToken(req.headers["authorization"]);
        if (req.headers["authorization"] !== undefined) {
            // console.log("Token Bearer => ", req.headers["authorization"])
            // console.log("USER IP => ", req.ip)
            // console.log("USER DECODE DATA => ", jwtData)
        }
        return {
            bearerToken: req.headers["authorization"],
            ip: req.ip,
            user: jwtData
        };


    },
    endpoint: {
        url: "http://localhost:"+process.env.PORT
    },
    debug: true,
    tracing: true,
    introspection: true,
    playground: true
});



server.applyMiddleware({ app });
app.get("/", (req,res)=>{
    res.status(200).json({
        msg: "Hello Server"
    })
})



export const DBLink = process.env.DB

export const google_auth = {
    'googleAuth' : {
        'clientID': process.env.GoogleclientID,
        'clientSecret': process.env.GoogleclientSecret,
        'callbackURL': 'http://localhost:'+process.env.PORT
    },
}


app.listen({ port: process.env.PORT || 3000 }, (url) => {
    console.log(`🚀  Server ready at http://localhost:${process.env.PORT || 3000}`);
    // console.log(`🚀  Server ready at ${process.env.PORT || 4002}`);
})
