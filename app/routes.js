const express = require ('express');
const routes = express;

routes.set('view','ejs');

routes.get("/public/img/",  (req, res) => {

  return res.send('/public/img/logo.png');
});

routes.get("/login",  (req, res) => {

  return res.send('./app/login.ejs');
});

routes.post("/login",  (req, res) => {

  return res.send('olq');
});
// const login = require("./models/Post");

// routes.get("/login",  (req, res) => {

//   return res.send(login);
// });


module.exports = routes;
