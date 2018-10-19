const fs = require('fs');
let myObj = require('./articles.json');
let logs = require('./log.json');
module.exports = {
  c_create: function (req, res, payload, cb) {
	for (let i = 0; i < myObj['articles'].length; i++){
		if (myObj['articles'][i]['id'] === payload.articleId){
			payload['id'] = myObj['articles'][i]['comments'].length + 1;
			myObj['articles'][i]['comments'][   myObj['articles'][i]['comments'].length   ] = payload;
		}
	}
	let out=JSON.stringify(myObj);
	fs.writeFile("./articles.json", out, function(err) { });
	logs['requests'][logs['requests'].length] = {"date":Date(),"request":"comments/create","body":payload}
	let logObj = JSON.stringify(logs);
	fs.writeFile("./log.json", logObj, function(err) { });
	cb(null, myObj);
  }
};