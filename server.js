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

    var naturalLanguageDate;
    var unixTimeStamp;
    var options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };

    if (!isNaN(req.params.value)) { // if parameter is a number then it is a valid unix timestamp
	// get natural language date
	// helpful: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
	naturalLanguageDate = new Date(req.params.value*1000);
	
	res.json(
    	    {
    		unix: req.params.value,
    		natural: naturalLanguageDate.toLocaleDateString('en-US', options)
    	    }
    	);
    } else { // if parameter is not a number 
	// check if it is a natural date in the format we want
	// TODO

		      
	// unixTimeStamp = naturalLanguageDate.getTime()/1000;
	
	res.json(
    	    {
    		unix: unixTimeStamp,
    		natural: naturalLanguageDate
    	    }
    	);
    }
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
