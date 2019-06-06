const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const  users = require('./routes/users');
const app = express();

app.use('/', routes);
app.use('/users', users);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.post('/login', function (req, res) {
  res.render('home/login.ejs'); // load the index.ejs file
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});



// app.get("/login",  (req, res) => {

//     return res.send('./app/login.ejs');
//   });
  
//  app.post("/login",  (req, res) => {
  
//     return res.render('login');
//   });


app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});


// const express = require ('express');
// const app = express;

