// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// }); 

const users = ['ali', 'budi', 'cici']

const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hai', (req, res) => {
  res.send('hai dunia')
})

app.post('/hai', (req, res) => {
  debugger
  res.send('hai dunia')
})

app.get('/users', function(req, res){
  res.render('index', {
    body: users
  });
});

app.get('/abu', function(req, res){
  res.render('index', {
    body: 'abu'
  });
});

app.get('/kereta', function(req, res){
  res.render('index', {
    body: ['proton', 'perodua', 'toyota']
  });
});

app.get('/user/:name', function(req, res){

  res.render('index', {
    body: req.params.name
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// how to debug
// explore request object
// explore response object