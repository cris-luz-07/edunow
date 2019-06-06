


/* GET home page. */
app.get('/', function(req, res) {
    res.render('index', { title: 'Index' });
});

module.exports = app;