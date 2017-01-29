var pg = require("pg");

var conString = "pg://postgres:postgres@localhost:5432/postgres";

var client = new pg.Client(conString);
client.connect();

// client.query("CREATE TABLE IF NOT EXISTS emps(firstname varchar(64), lastname varchar(64))");
client.query("INSERT INTO emp(id, name) values($1, $2)", [1, 'McDonald']);
client.query("INSERT INTO emp(id, name) values($1, $2)", [2, 'McCheese']);

var query = client.query("SELECT id, name FROM emp ORDER BY name");
query.on("row", function (row, result) {
    result.addRow(row);
});
query.on("end", function (result) {
    console.log(JSON.stringify(result.rows, null, "    "));
    client.end();
})