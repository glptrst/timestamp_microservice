const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('hi, give me a parameter...');
});
app.get('/:date', function(req, res){
    
    // avoid favicon request: https://stackoverflow.com/questions/17952436/node-js-double-console-log-output
    if(req.url === '/favicon.ico')
    {
	;
    } else {
	if (Number.isInteger(Number(req.params.date))) { // if parameter is an integer
	    // TODO
	    // if the integer less than ? or greater than ? then it is not a valid unix timestamp
	    	// complain
	    // Otherwise it is a valid unix timestamp
	    // get natural language date
	    // helpful: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
	    var options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
	    var naturalLanguageDate = new Date(Number(req.params.date)*1000);
	    res.json(
		{
		    unix: req.params.date,
		    natural: naturalLanguageDate.toLocaleDateString('en-US', options)
		}
	    );
	} else { // if parameter is not an integer
	    // TODO
	    // check if it is a date in a correct format
	}
    }
});

app.listen(3000, function(){
    console.log('app listening on port 3000');
});
