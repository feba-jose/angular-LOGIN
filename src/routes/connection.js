const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
  host : 'localhost',
   user : 'root',
   password : 'Padippurackal@2',
   database : 'te',
   multipleStatements:true

});
mysqlConnection.connect((err)=>{
  if(!err){
    console.log("connected");
  }
  else{
    console.log("not connected"+JSON.stringify(err, undefined,2));
  }
});
module.exports = mysqlConnection;
