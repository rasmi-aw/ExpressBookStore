let express = require('express')()
express.set('view engine', 'pug');
//
express.get('/', (req, res) => {
    res.render('index',{test:"It works"})
}).listen(80)