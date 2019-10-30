var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',function(req, res) {
  res.render("index.html");
});

app.listen(port, function() {
    console.log("The http://localhost: " + port + " is listening");
    console.log('Server is running in', process.env.NODE_ENV + ' mode.....................');
});
