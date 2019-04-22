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
selectData();

//Function that adds test data to database
function selectData(){
    //Build SQL query to select all employees
    var sql = "SELECT * FROM files";

    //Execute the query
    con.query(sql, function (err, result) {

        //Check for errors
        if (err) throw err;

        //Output results in JSON format - a web service would return this string.
        console.log(JSON.stringify(result));

        //Work through results
        result.forEach(function (files) {
            console.log("--------- EMPLOYEE ----------");
            console.log("ID: " + files.ID);
            console.log("Name: " + files.Name);
            console.log("File: " + files.File);


            console.log();
        });
    });
}

//Close the connection
con.end();
