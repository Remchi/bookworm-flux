import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function() {
  console.log('App listening at http://localhost:3000');
});
