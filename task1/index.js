var express = require('express');
var bodyParser = require("body-parser");
var routes = require('./src/router/routes');



var app = express();
app.use(bodyParser.json());

routes(app);


var server = app.listen(5639, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

}); 
