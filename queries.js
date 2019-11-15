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
                args:{
                    totalCount: {
                        type:GraphQLInt,
                    }
                },
                resolve:(db, {totalCount}) => {
                    return db.slice(0, totalCount+1);
                }
            }
        }
    })
}

module.exports = queries;