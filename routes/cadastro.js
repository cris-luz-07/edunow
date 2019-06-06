


/* GET home page. */
app.get('/cadastro', function(req, res) {
    res.render('cadastro', { title: 'cadastro' });
});

module.exports = app;