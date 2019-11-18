

/* 
var {dbConnector} = require("./database");
var mysqlJS = require("mysql");
creation and display

for (var i = 100; i < 50000; i++) {
    dbConnector.query(mysqlJS.format("INSERT INTO post (title, message, createdAt) values(?,?,?)", [`Title ${i + 9}`, `Message ${i + 9}`, mysqlJS.raw('CURTIME()')]), (err, res, fields) => {
        if (err) { console.log(err); }
        console.log(res);
    });
}

dbConnector.query("SELECT id, title from post", (err, res, fields) => {
    if (err) console.log(err);
    res.forEach((row, i) => {
        if (i > 10) return;
        console.log("Id =", row.id);
        console.log("Title =", row.title);
    })

});

sleep

    dbConnector.query("select sleep(2)",(err, res, field)=>{
        if(err)console.log(err);
    });
gql no http
    graphql(schema, `{
        allposts(totalCount: 5){
            title
        }
    }`, { db: serverObject.postObject }.db).then((r) => { console.log(r.data.allposts) });


sample data
return totalCount ? 
                    [{ id: 1, title: "Title 1", message: "Message 1", createdAt: Date.now().toString() }]
                    :
                    [
                        { id: 1, title: "Title 1", message: "Message 1", createdAt: Date.now().toString() },
                        { id: 2, title: "Title 2", message: "Message 2", createdAt: Date.now().toString() },
                        { id: 3, title: "Title 3", message: "Message 3", createdAt: Date.now().toString() }
                    ]
*/