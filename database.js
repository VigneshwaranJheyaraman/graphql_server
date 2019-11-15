const mysqlJS = require("mysql");

//database connector configutation
var dbConnector = mysqlJS.createConnection({
    host: "192.168.2.165",
    user: "graphql_user",
    password: "Mysql@12",
    database: "gql_db",
    port: 3306
});


//connect to database;
function connectoDatabase(callback) {

    //database connection established
    dbConnector.connect();

    //get the list of rows from table "POST"
    dbConnector.query("select * from post", function (err, response, fields) {
        if (err) { 
            console.log(`Error Occured: ${err.toString()}`)
            return JSON.stringify({ error: err.toString() }); 
        }
        if (response && response.length > 0) {
            //response is available
            callback(response);
        }
        else {
            callback([{ error: "Empty Response" }])
        }
    });

    //database connection ended
    dbConnector.end();
}

module.exports = {dbConnector: dbConnector, connectionFunction : connectoDatabase}