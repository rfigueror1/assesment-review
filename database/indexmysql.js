var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Ricarofi1',
  database : 'tweetDb'
});

connection.connect();

var retrieveResults = function(callback){
  var queryString = 'SELECT * FROM tweets'
  connection.query(queryString, (err, results, fields) => {
    if(err){
      callback(err) ;
      return;
    }
    callback(null, results);
  })
}

var retrieveResult = function(word, callback){
  var queryString = 'SELECT id FROM tweets WHERE tweetText LIKE ?'
  var params = [word];
  connection.query(queryString, word, (err, results, fields) => {
    if(err){
      callback(err) ;
      return;
    }
    callback(null, results);
  })
}

//INSERT INTO tweets (user_data, tweetText) VALUES ('hi, this is just a test', 'Rodrigo Figueroa');

var add = function(user_data, tweetText, callback){
  var queryString = 'INSERT INTO tweets (user_data, tweetText) VALUES(?,?)'
  var params = [user_data, tweetText];
  connection.query(queryString, params, (err, results, fields) => {
    if(err){
      callback(err) ;
      return;
    }
    callback(null, results);
  })
}
