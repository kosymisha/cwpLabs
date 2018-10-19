const fs = require('fs');
module.exports = {
	htmlcode: function(req, res, payload, cb){
		fs.readFile('index.html', (err, data) => {
			res.statusCode=200;
      res.setHeader('Content-Type','text/html');
      cb(null, data);
		})
	}
};