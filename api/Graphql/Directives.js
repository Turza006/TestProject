const { SchemaDirectiveVisitor } = require("apollo-server-express");
const { defaultFieldResolver } = require("graphql");

class isAuthenticated extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = defaultFieldResolver } = field;

        field.resolve = async function(...args) {
            // extract user from context
            const { user } = args[2];
            console.log("USER", user)

            if (user.status === 403) {
                return {
                    msg: "Unauthorized",
                    code: UNAUTHORIZED
                }
            }else if(user.userType === "SuperAdmin"){
                return resolve.apply(this, args);
            }

            return {
                msg:"Only For SuperAdmin",
                code:UNAUTHORIZED
            }
        };
    }
}


export {isAuthenticated}