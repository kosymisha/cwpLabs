const fs = require('fs');
let logs = require('./log.json');
let myObj = require('./articles.json');
let ddd = [];
module.exports = {
  log_readAll: function (req, res, payload, cb) {
  	// fs.readFile('log.json', function (error, data){
  	// 	ddd = JSON.stringify(data);
  	// });
  	cb(null, logs);
}
};