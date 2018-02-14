var server = require('./server.js');
var test = require('tape');

test('testing capitalisation', function(t) {
    t.equal(server.convertToCaps('cheeky monkey'), 'CHEEKY MONKEY')
    t.end()
})