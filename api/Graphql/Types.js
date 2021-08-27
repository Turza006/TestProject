const {ApolloServer, gql} = require('apollo-server');

export const typeDefs = gql`
    directive @isAuthenticatedForSuperAdmin on FIELD_DEFINITION


    type MsgWithCode{
        msg:String,
        code:String
    }
    type User{
        _id:ID,
        userName:String,
        email:String,
        status:String
        jwt:String,
        msg:String,
        code:String
    }
    input CustomerInput{
        userName: String,
        email: String,
    }
    input InvoiceItemInput{
        itemName: String,
        price:Float,
        qty:Float
    }
    
    input InvoiceInput{
        invoiceItems : [InvoiceItemInput],
        customer:CustomerInput
    }
    type InvoiceItem{
        itemName: String,
        price:Float,
        qty:Float
    }
    type Customer{
        userName: String,
        email: String,
    }
    
    type Invoice{
        _id:ID,
        user:User,
        invoiceItems:[InvoiceItem],
        customer:Customer,
        total:Float
    }
    type InvoicePagenation{
        Invoices:[Invoice],
        count:Int,
        code:String,
        msg:String
    }
    

    #    All Query
    type Query{
        testQuery : MsgWithCode
        AllInvoice(limit:Int,offset:Int) : InvoicePagenation
        
    }

    #    ALL Mutation
    type Mutation{
        testMutation: MsgWithCode
        UserLoginByGoogle(googleToken:String):User
        CreateInvoice(payload:InvoiceInput):MsgWithCode
        
    }
`
