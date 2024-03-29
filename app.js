const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// app.engine('html',require('ejs').renderFile);
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'));


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get("/login",  (req, res) => {

    return res.render('views/login');
  });
  
 app.post("/login",  (req, res) => {
  
     return res.render('/login');
  });


app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});


// const express = require ('express');
// const app = express;

