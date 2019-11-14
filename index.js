//dependencies deployment;
const express = require("express");
const cors = require("cors");
const mysqlJS = require("mysql");
const { GraphQLSchema, graphql } = require("graphql");
const graphqlHTTP = require("express-graphql");
var { connectionFunction } = require("./database");
var queries = require("./queries");
var { ServerObject } = require("./serverObject");

var serverObject = new ServerObject([]);

//callback after connected with database
function dbConnectedCallback(newObject) {
    serverObject.updatedServerObject(newObject);
    //create the object structure
    /*
    Collection
        ->Post
            -id
            -title
            -message
            -createdAt
    */


    //describe the schema
    var schema = new GraphQLSchema({ query: queries.allPosts });

    graphql(schema, `{
        allposts{
            id
            title
        }
    }`).then((r) => { console.log(r.data.allposts) });

    //describe the resolvers
    //var rootResolvers = 

    //run the query from user with schema and return the response

}


//connecto DB
connectionFunction(dbConnectedCallback);