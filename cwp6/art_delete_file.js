const fs = require('fs');
let myObj = require('./articles.json');
let logs = require('./log.json');
module.exports = {
  art_delete: function (req, res, payload, cb) {
	for (let i = 0; i < myObj['articles'].length; i++) {
		if (myObj['articles'][i]['id'] === payload.id) {
			myObj['articles'].splice(i, 1);
			break;
		}
	}
	let out=JSON.stringify(myObj);
	fs.writeFile("./articles.json", out, function(err) { });
	logs['requests'][logs['requests'].length] = {"date":Date(),"request":"articles/delete","body":payload}
	let logObj = JSON.stringify(logs);
	fs.writeFile("./log.json", logObj, function(err) { });
	cb(null, myObj);
  }
};