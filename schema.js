const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
    name:'user',
    fields:()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLInt}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'xyz',
    fields:{
        codeimprove:{
            type: new GraphQLList(UserType),
            resolve(parent,args){
                let data = [{
                    id:12,name:'codeimprove', email:'code@gmail.com', phone:1234567890
                },
                {
                    id:13,name:'lettech', email:'lettech@gmail.com', phone:0987654321
                }
                ]
                return data
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootQuery})