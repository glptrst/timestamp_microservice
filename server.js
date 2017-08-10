var express = require('express');

var app = express();

// app.get('/', function(req, res) {
//     console.log("you haven't passed any value");
//     res.send("you haven't passed any value");
// });

app.get('/:value', function(req, res) {
    // TODO:
    // check if the string passed contains either a unix timestamp or
    // a natural language date
        // if it does, return the right values
        // if it doesn't, return null as values

    if (!isNaN(req.params.value)) { // if parameter is a number then it is a valid unix timestamp
	res.json(
    	    {
    		unix: req.params.value,
    		natural: '?'
    	    }
    	);
    } else { // if parameter is not a number then check if it is a valid natural language date
	res.json(
    	    {
    		unix: req.params.value,
    		natural: '?'
    	    }
    	);
    }
});

app.listen(3000, function() {
    console.log('working');
});
