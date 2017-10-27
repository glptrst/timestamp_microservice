const express = require('express');

const app = express();

app.get('/:date', function(req, res){
    res.send(req.params);
});

app.listen(3000, function(){
    console.log('app listening on port 3000');
});
