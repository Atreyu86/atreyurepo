var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'classicmodels'
});

/*connection.connect();

connection.query('show tables', function (error, results, fields) {
  if (error) throw error;
  for (var i = 0; i < results.length; i++)
  {
    console.log("Tabla numero" + (i + 1)+":"+results[i].Tables_in_classicmodels);
  }
  //console.log('The solution is: ', results);
});

connection.end();*/

connection.query ('SELECT * FROM Costumers',function ( error , results, fields) {
  if (error) throw error;
  for (var i = 0; i < results.length; i++)
  {
    console.log("Registro ", (i+1), ":", results[i]);

  }
});
connection.end();
