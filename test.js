/* 
creation and display

for (var i = 0; i < 100; i++) {
    dbConnector.query(mysqlJS.format("INSERT INTO post (title, message, createAt) values(?,?,?)", [`Title ${i + 9}`, `Message ${i + 9}`, 'CURRTIME()']), (err, res, fields) => {
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

*/