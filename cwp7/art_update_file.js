const fs = require('fs');
let myObj = require('./articles.json');
let logs = require('./log.json');
module.exports = {
  art_update: function (req, res, payload, cb) {
	for (let i = 0; i < myObj['articles'].length; i++) {
		if (myObj['articles'][i]['id']===payload.id) {
			myObj['articles'][i]['title'] = payload.title; 
			myObj['articles'][i]['text'] = payload.text; 
			myObj['articles'][i]['date'] = payload.date; 
			myObj['articles'][i]['author'] = payload.author; 
			myObj['articles'][i]['comments'] = payload.comments;
		}
	}
	let out=JSON.stringify(myObj);
	fs.writeFile("./articles.json", out, function(err) { });
	logs['requests'][logs['requests'].length] = {"date":Date(),"request":"articles/update","body":payload}
	let logObj = JSON.stringify(logs);
	fs.writeFile("./log.json", logObj, function(err) { });
	cb(null, myObj);
  }
};
