const express = require('express');

const app = express();


app.get('/', function(req, res) {
    if(req.url === '/favicon.ico') // https://stackoverflow.com/questions/17952436/node-js-double-console-log-output
    {
	;
    } else {
	res.send('hi');
    }
});
app.get('/:date', function(req, res){
    if(req.url === '/favicon.ico') // https://stackoverflow.com/questions/17952436/node-js-double-console-log-output
    {
	;
    } else {
	res.send('cool, you gave a param');
	console.log(req.params.date); 
    }
});

app.listen(3000, function(){
    console.log('app listening on port 3000');
});
