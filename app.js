const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.set('view','ejs');

app.get("/login",  (req, res) => {

    return res.render('/login');
  });
  
 app.post("/login",  (req, res) => {
  
     return res.render('/login');
  });


app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});


// const express = require ('express');
// const app = express;

