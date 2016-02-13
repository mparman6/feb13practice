var express = require('express');
var handleBars = require('express-handlebars');


var app = express();
var PORT = process.env.PORT || 8090;

app.engine('handlebars', handleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get("/", function(req, res) {

}); 


app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});