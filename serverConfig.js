var serverConfig = {
    port: 8080,
    urlLocations: {
        index:{
            root:"/",
            main: "/gql",
            html:"./src/index.html"
        },
        gql_server: {
            allposts: "/gql/all",
            gql_intelli: "/gql_I"
        },
        rest_api:{
            allposts:"/api/all",
            onlyId: "/api/id",
            onlyTitle:"/api/title",
            onlyMessages:"/api/message",
            onlyCreatedAt: "/api/createdAt",
            mannual:"/api/mannual"
        }
    },
    dbConfiguration:{
        server:{
            host: "192.168.2.165",
            user: "graphql_user",
            password: "Mysql@12",
            database: "gql_db",
            port: 3306
        },
        tableName:"post"

    }
};

module.exports = { serverConfig };