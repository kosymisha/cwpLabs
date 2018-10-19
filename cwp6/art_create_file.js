const fs = require('fs');
let myObj = require('./articles.json');
let logs = require('./log.json');
module.exports = {
  art_create: function (req, res, payload, cb) {
	payload['id'] = myObj['articles'].length + 1;
	for (let i = 0; i < payload['comments'].length; i++){
		payload['comments'][i]['articleId'] = myObj['articles'].length + 1;
	}
	myObj['articles'][myObj['articles'].length] = payload;
	let out=JSON.stringify(myObj);
	fs.writeFile("./articles.json", out, function(err) { });
	logs['requests'][logs['requests'].length] = {"date":Date(),"request":"articles/create","body":payload}
	let logObj = JSON.stringify(logs);
	fs.writeFile("./log.json", logObj, function(err) { });
	cb(null, payload);
  }
};
