const { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLList, GraphQLNonNull } = require("graphql");

var Post = new GraphQLObjectType({
    name:"Post",
    fields:{
        id:{
            type:new GraphQLNonNull(GraphQLInt)
        },
        title:{
            type:GraphQLString
        },
        message:{
            type:GraphQLString
        },
        createdAt:{
            type:GraphQLString
        }
    }
});
var queries = {
    post:Post,
    allPosts: new GraphQLObjectType({
        name:"allPosts",
        fields:{
            allposts:{
                type:new GraphQLList(Post),
                resolve:() => {
                    return [{
                        id:2323,
                        title:"This is a test title",
                        message:"This is a test message",
                        createdAt:Date.now().toString()
                    }]
                }
            }
        }
    })
}

module.exports = queries;