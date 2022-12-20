let express = require('express')()
express.set('view engine', 'pug');
//
module.exports = {
    start: function (port) {
        console.log("Server started")
        express.get('/', (req, res) => {
            res.render('index', {test: "It works"})
            res.end()
        }).listen(port)
    }
}