const express = require('express');

const app = express();

app.get('/', function(req, res) {
    // avoid favicon request
    if(req.url === '/favicon.ico') // https://stackoverflow.com/questions/17952436/node-js-double-console-log-output
    {
	console.log('Favicon requested!');
    } else {
	res.send('hi, give me a parameter...');
    }
});
app.get('/:date', function(req, res){
    // avoid favicon request
    if(req.url === '/favicon.ico') // https://stackoverflow.com/questions/17952436/node-js-double-console-log-output
    {
	console.log('Favicon requested!');
    } else {
	if (Number.isInteger(Number(req.params.date))) { // if parameter is an integer
	    // if the integer is too big
	    	// complain
	    // Otherwise calculate date in the other format
	    var date = new Date(Number(req.params.date)*1000);
	    console.log(date);
	} else { // if parameter is not an integer
	    // TODO
	    // check if it is a date in a correct format 
	}
    }
});

app.listen(3000, function(){
    console.log('app listening on port 3000');
});
