let express = require('express')
let app = express()
app.set('view engine', 'pug');
//
module.exports = {
    start: function (port) {
        console.log("Server started")
        app.use('/assets',express.static('public'))
        app.get('/', (req, res) => {
            res.render('index', {test: "It works"})
            res.end()
        }).listen(port)
    }
}