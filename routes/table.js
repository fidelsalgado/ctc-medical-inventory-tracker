var express = require('express');
var router = express.Router();
var parse = require('csv-parse');
var fs = require('fs');

var sqlite3 = require("sqlite3").verbose();
//var db = new sqlite3.Database('test.db');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var db = new sqlite3.Database('./data/test.db');
	var testOutput = ""

	db.all("SELECT rowid AS id, info FROM lorem", function(err, rows) {
		if (err) throw err;
		res.json(rows)
	})

	/*fs.readFile('./data/medication_inventory_dummy_data.csv', 'utf8', function(err, data) {  
    	if (err) throw err;
    	var table = parse(data, {comment: '#'}, function(err, output){
    		if (err) throw err;
  			res.json(output)
		});  
	});*/
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	res.send("Test")
})

module.exports = router;
