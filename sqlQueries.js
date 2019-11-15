var sqlQueries = {
    list:(tableName) => {return `select * from ${tableName}`},
    listColumn: (colName, tName) => {return `select ${colName} from ${tName}`},
    mannualQuery: (query) => {return query;}
}

module.exports = {sqlQueries};