const {ApolloServer, gql} = require('apollo-server');

export const typeDefs = gql`
    directive @isAuthenticatedForSuperAdmin on FIELD_DEFINITION


    type MsgWithCode{
        msg:String,
        code:String
    }
    
    

    #    All Query
    type Query{
        testQuery : MsgWithCode
        
        
    }

    #    ALL Mutation
    type Mutation{
        testMutation: MsgWithCode
    }
`