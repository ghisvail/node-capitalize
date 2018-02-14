
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.text());

function convertToCaps(str) {
    return str.toUpperCase();
}

app.get('/', function(req,res) {
    res.end('Milk was a bad choice');
});

app.post('/api/capitalize', function(req, res) {
    res.send(convertToCaps(req.body));
})

if (require.main === module) {
    app.listen(port, function() {
        console.log('Server listening on port: ' + port);
    });
}

module.exports = {
    convertToCaps: convertToCaps
}