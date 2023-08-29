const express = require('express')
const app = express()
const port = (process.env.PORT || 3000)

app.get('/', function (req, res) {
  res.send('<h1>Hello World From Express & a PaaS/Render</h1>')
})

app.get('/whaterver', function(req,res) {
  res.sendFile('index.html');
})

app.listen(port, () => console.log('Server is running ... on' ${port} ));