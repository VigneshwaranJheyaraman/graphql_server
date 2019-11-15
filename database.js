const mysqlJS = require("mysql");
const { serverConfig } = require("./serverConfig");
const {sqlQueries} = require("./sqlQueries");

//database connector configutation
var dbConnector = mysqlJS.createConnection(serverConfig.dbConfiguration.server);


//connect to database;
function connectoDatabase(callback) {

    //database connection established
    dbConnector.connect();

    //get the list of rows from table "POST"
    dbConnector.query(sqlQueries.list(serverConfig.dbConfiguration.tableName), async function (err, response, fields) {
        if (err) { 
            console.log(`Error Occured: ${err.toString()}`)
            return JSON.stringify({ error: err.toString() }); 
        }
        if (response && response.length > 0) {
            //response is available
            await callback(response);
        }
        else {
            await callback([{ error: "Empty Response" }])
        }
        //database connection ended
        //dbConnector.end();
    });

}

module.exports = {dbConnector: dbConnector, connectionFunction : connectoDatabase}