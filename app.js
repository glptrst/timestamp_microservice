const express = require('express');

const path  = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/:date', function(req, res){
    // avoid favicon request: https://stackoverflow.com/questions/17952436/node-js-double-console-log-output
    if(req.url === '/favicon.ico')
    {
	;
    } else {
	if (Number.isInteger(Number(req.params.date))) { // if parameter is an integer
	    // get natural language date
	    // helpful: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
	    var date = new Date(Number(req.params.date)*1000);
	    var options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
	    var natLangDate = date.toLocaleDateString('en-US', options);
	    if (natLangDate === 'Invalid Date') {
		res.json(
		    {
			unix: null,
			natural: null
		    }
		);
	    } else {
	    	res.json(
		    {
			unix: req.params.date,
			natural: date.toLocaleDateString('en-US', options)
		    }
		);
	    }
	} else { // if parameter is not an integer
	    // check if it is a date in a correct format
	    var string = req.params.date;
	    //the parameter splitted with ' ' should give an arrary of length three
	    var splitted = string.split(' ');
	    if (splitted.length !== 3) {
		res.json(
		    {
			unix: null,
			natural: null
		    }
		);
	    } else {
		// splitted[0] should be a string
		if (typeof splitted[0] === 'string') {
		    // splitted[1] should be a number and a comma
		    var shouldBeAnum = splitted[1].substring(0, splitted[1].length - 1);
		    if (Number.isInteger(Number(shouldBeAnum))) {
			var shouldBeAcomma = splitted[1].charAt(splitted[1].length - 1);
			if (shouldBeAcomma === ',') {
			    // splitted[2] should be a number
			    if (Number.isInteger(Number(splitted[2]))) {
				var month = splitted[0].substring(0, 3);
				var day = splitted[1].substring(0, splitted[1].length - 1);
				var year = splitted[2];
				var unixTimestamp = Date.parse(String(month + ' ' + day + ', ' + year + ' UTC'));
				if (isNaN(unixTimestamp)) { // if Date.parse returns a NaN, then there is still something wrong in the string given as a input
				    res.json(
					{
					    unix: null,
					    natural: null
					}
				    );
				} else {
				    res.json(
				    	{
				    	    unix: unixTimestamp,
				    	    natural: string
				    	}
				    );
				}
			    } else {
				res.json(
				    {
					unix: null,
					natural: null
				    }
				);
			    }
			} else {
			    res.json(
				{
				    unix: null,
				    natural: null
				}
			    );
			}
		    } else {
			res.json(
			    {
				unix: null,
				natural: null
			    }
			);
		    }
		} else {
		    res.json(
			{
			    unix: null,
			    natural: null
			}
		    );
		}
	    }
	}
    }
});

app.listen(process.env.PORT || 3000);
