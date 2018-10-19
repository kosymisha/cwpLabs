const fs = require('fs');
let myObj = require('./articles.json');
let logs = require('./log.json');
module.exports = {
  art_read: function (req, res, payload, cb) {
	for (let i = 0; i < myObj['articles'].length; i++) {
		if (myObj['articles'][i]['id']===payload.id) {
			var resu = myObj['articles'][i]; 
		}
	}
	logs['requests'][logs['requests'].length] = {"date":Date(),"request":"articles/read","body":payload}
	let logObj = JSON.stringify(logs);
	fs.writeFile("./log.json", logObj, function(err) { });
	cb (null, resu);
  }
};
