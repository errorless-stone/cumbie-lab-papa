const express = require('express')
const app = express()
const port = (process.env.PORT || 3000)

app.set('view engine', 'ejs');

let myVariableServer = 'soft coded server data';

app.get('/', function (req, res) {
  res.send('<h1>Hello World From Express & a PaaS/Render</h1>')
})

app.get('/asutton4', function(req,res) {
  res.render(__dirname + '/index.ejs',
  {
    'myVariableClient' : myVariableServer
  });
})

app.get('/whatever', function(req,res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => console.log(`Server is running ... on ${port} `));