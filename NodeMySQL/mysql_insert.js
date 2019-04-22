//Import the mysql module
var mysql = require('mysql');

//Create a connection object with the user details
var con = mysql.createConnection({
    host: "localhost",
    user: "intzeme",
    password: "ei050598",
    database: "cwrk3"
});

//Connect to the database
con.connect(
    //This function is called when the connection is attempted
    function(err) {
        if (err) throw err;//Check for errors

        //Output results
        console.log("Connected!");
    }
);

//Call function that inserts some data into the database
addData();

//Function that adds test data to database
function addData(){
    //Build SQL query
    var sql = "INSERT INTO files (Name, File) " +
        "       VALUES ('john', 'picutre5')";

    //Execute the query
    con.query(sql, function (err, result) {

        //Check for errors
        if (err) throw err;

        //Output results
        console.log(result.affectedRows + ' rows updated. ID is ' + result.insertId);
    });
}

//Close the connection
con.end();
