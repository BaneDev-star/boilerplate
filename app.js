var express = require('express'),
    app     = express(),
    React   = require('react')
;

require('node-jsx').install({ harmony: true });
var App = require('./src/index.jsx');

var handler = function(name) {
  return function(req, res) {
    var html = React.renderComponentToString(App({
      path: "/" + name
    }));
    res.send(html);
  };
};

app.get('/',        handler(''));
app.get('/artist',  handler('artist'));
app.get('/country', handler('country'));

app.use(express.static(__dirname));

var port = process.env.PORT || 5000;
console.log("listening..." + port);
app.listen(port);
