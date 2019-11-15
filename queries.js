const { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLList, GraphQLNonNull } = require("graphql");
var { connectionFunction } = require("./database");
var { ServerObject } = require("./serverObject");


var serverObject = new ServerObject([]);

//connect to DB
connectionFunction(dbConnectedCallback);

//callback after connected with database
async function dbConnectedCallback(newObject) {
    await serverObject.updatedServerObject(newObject);
    //create the object structure
    /*
    Collection
        ->Post
            -id
            -title
            -message
            -createdAt
    */



}

var Post = new GraphQLObjectType({
    name: "Post",
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        title: {
            type: GraphQLString
        },
        message: {
            type: GraphQLString
        },
        createdAt: {
            type: GraphQLString
        }
    }
});
var queries = {
    post: Post,
    allPosts: new GraphQLObjectType({
        name: "allPosts",
        fields: {
            allposts: {
                type: new GraphQLList(Post),
                args: {
                    totalCount: {
                        type: GraphQLInt,
                    },
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve: (_, { totalCount, id }) => {
                    return totalCount ?
                        serverObject.postObject.slice(0, totalCount + 1) :
                        id ?
                            serverObject.postObject.filter((v) => { return v.id === id; })
                            : serverObject.postObject;
                }
            }
        }
    })
}

module.exports = queries;