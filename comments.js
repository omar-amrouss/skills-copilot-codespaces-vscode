// Create web server and listen on port 3000
// http://localhost:3000
// http://localhost:3000/comments
// http://localhost:3000/comments/1

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var comments = [
  { id: 1, author: 'John', text: 'Hello, React!'},
  { id: 2, author: 'Doe', text: 'Hello, Redux!'}
];

app.get('/', function(req, res) {
  res.send('Hello, Express!');
});

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.get('/comments/:id', function(req, res) {
  var comment = comments.find(function(comment) {
    return comment.id === parseInt(req.params.id);
  });
  res.json(comment);
});

app.post('/comments', function(req, res) {
  var comment = req.body;
  comment.id = comments.length + 1;
  comments.push(comment);
  res.json(comment);
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});