const { dbConnector } = require("./database");
const { sqlQueries } = require("./sqlQueries");
const { serverConfig } = require("./serverConfig");

const databaseServerBridge = (err, rows, fields, callBack) => {
    if (err) {
        try
        {
            console.log("error", err);
        }
        catch(err)
        {
            console.log("An error occured kindly take a look");
            callBack([{ error: err }]);
        }
    }
    if (rows && rows.length > 0) {
        callBack({response: rows});
    }
    else {
        callBack([{ response: [] }])
    }
}

var sqlFunctions = {
    listAll: function (callBack) {
        dbConnector.query(
            sqlQueries.list(serverConfig.dbConfiguration.tableName),
            function (err, rows, fields) {
                databaseServerBridge(err, rows, fields, callBack);
            }
        )
    },
    listID: function (callBack) {
        dbConnector.query(
            sqlQueries.listColumn("id", serverConfig.dbConfiguration.tableName),
            function (err, rows, fields) {
                databaseServerBridge(err, rows, fields, callBack);
            }
        );
    },
    listTitle: function (callBack) {
        dbConnector.query(
            sqlQueries.listColumn("title", serverConfig.dbConfiguration.tableName),
            function (err, rows, fields) {
                databaseServerBridge(err, rows, fields, callBack);
            }
        );
    },
    listMessage: function (callBack) {
        dbConnector.query(
            sqlQueries.listColumn("message", serverConfig.dbConfiguration.tableName),
            function (err, rows, fields) {
                databaseServerBridge(err, rows, fields, callBack);
            }
        );
    },
    listCreatedAt: function (callBack) {
        dbConnector.query(
            sqlQueries.listColumn("createdAt", serverConfig.dbConfiguration.tableName),
            function (err, rows, fields) {
                databaseServerBridge(err, rows, fields, callBack);
            }
        );
    },
    mannualQuery: function (query, callBack) {
        dbConnector.query(
            sqlQueries.mannualQuery(query),
            function (err, rows, fields) {
                databaseServerBridge(err, rows, fields, callBack);
            }
        );
    }
};

module.exports = { sqlFunctions };