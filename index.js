//dependencies deployment;
const express = require("express");
const cors = require("cors");
const { GraphQLSchema, graphql } = require("graphql");
const graphqlHTTP = require("express-graphql");
var queries = require("./queries");
const { serverConfig } = require('./serverConfig');
const bodyParser = require("body-parser");
const { sqlFunctions } = require("./restApi_DB");

//graphql_server_objects
const graphQLServer = express();
//graphql plugin
graphQLServer.use(bodyParser.json());

//starting the server
console.log(`Starting server listening at Port : ${serverConfig.port}`)




//describe the schema
var schema = new GraphQLSchema({ query: queries.allPosts });


/* Redirects */
graphQLServer.get(serverConfig.urlLocations.index.root, function (request, response) {
    return response.redirect(serverConfig.urlLocations.index.main);
});

//run the query from user with schema and return the response on http server
graphQLServer.get(
    serverConfig.urlLocations.index.main,
    function (request, response) {
        return response.sendFile(serverConfig.urlLocations.index.html, { root: __dirname });
    }
);


/* 
    Graphql server all url configurations 
    gql_server: {
        allposts: "/gqlServer/all",
        gql_intelli: "/gql_I"
    }
*/
graphQLServer.post(
    serverConfig.urlLocations.gql_server.allposts,
    async function (request, response) {
        if (request.body && JSON.stringify(request.body) !== JSON.stringify({})) {
            await graphql(schema, request.body.input).then((gql_response) => {
                return response.json({
                    response: gql_response.data.allposts
                });
            });
        }
        else {
            return response.json({
                error: "Under Construction"
            });
        }
    }
);
//graphQL server plugins
graphQLServer.use(
    serverConfig.urlLocations.gql_server.gql_intelli,
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);

/* ======================================== Graphql server all configuration ends here */

/* 
    REST API all url configurations 
    rest_api:{
        allposts:"/api/all",
        onlyId: "/api/id",
        onlyTitle:"/api/title",
        onlyMessages:"/api/message",
        onlyCreatedAt: "/api/createdAt",
        mannual:"/api/mannual"
    }
*/
graphQLServer.get(
    serverConfig.urlLocations.rest_api.allposts,
    async function (request, response) {
        sqlFunctions.listAll(data => {
            return response.json(data);
        })
    }
);
graphQLServer.get(
    serverConfig.urlLocations.rest_api.onlyId,
    async function (request, response) {
        sqlFunctions.listID(data => {
            return response.json(data);
        })
    }
);
graphQLServer.get(
    serverConfig.urlLocations.rest_api.onlyTitle,
    async function (request, response) {
        sqlFunctions.listTitle(data => {
            return response.json(data);
        })
    }
);
graphQLServer.get(
    serverConfig.urlLocations.rest_api.onlyMessages,
    async function (request, response) {
        sqlFunctions.listMessage(data => {
            return response.json(data);
        })
    }
);
graphQLServer.get(
    serverConfig.urlLocations.rest_api.onlyCreatedAt,
    async function (request, response) {
        sqlFunctions.listCreatedAt(data => {
            return response.json(data);
        })
    }
);
graphQLServer.get(
    serverConfig.urlLocations.rest_api.mannual,
    async function (request, response) {
        if (request.body && JSON.stringify(request.body) !== JSON.stringify({})) {
            sqlFunctions.mannualQuery(request.body.query, data => {
                return response.json(data);
            })
        }
    }
);
/*========================================= REST API all configuration ends here */


//listening
graphQLServer.listen(serverConfig.port);