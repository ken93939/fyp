var path = require('path');
var app = require(path.resolve(__dirname, '../server'));
var loopback = require('loopback');

var dataSource = app.dataSources.mySQL;


dataSource.automigrate('request', function(err) {
  if(err) throw err;
  console.log("Request!");
});