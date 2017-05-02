var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nhl')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views','./views');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection errpr:'));
db.once('open', function(){
  console.log('connected')
});

app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.render("volleyballTraker")
});

app.listen(3000)
