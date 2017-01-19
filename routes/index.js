var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Cool Title', 
    data: [[1,2,3],[4,5,6]],
    helpers: {
      list: function(context) {
        var ret = "<ul>";

        for(var i=0, j=context.length; i<j; i++) {
          ret = ret + "<li>" + options.fn(context[i]) + "</li>";
        }

        return ret + "</ul>";
      }
    }
  });
});

module.exports = router;
