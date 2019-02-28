const queryString = require('querystring');
const url = require('url');
module.exports = function(app){

app.get('/hello/:username', (req, res) => {
    
    res.writeHead(201, {
        "Content-Type": "text/html"
    });
    res.end('<h1>Hello '+req.params.username+'</h1>'+
    '<p>hi, Everyone!</p>'+
    '<button onClick = "location.href=\'http://127.0.01:3059/SecretDoor?firstname='+req.params.username+'\'">Aiziet</button>');
});

app.get('/SecretDoor', (req, res) => {
    var params = queryString.parse(url.parse(req.url).query);
    res.writeHead(201, {
        "Content-Type": "text/html"
    });
    res.end('<h1>Hello '+params['firstname']+'! </h1> <p>How did you get here?</p>');
});

}