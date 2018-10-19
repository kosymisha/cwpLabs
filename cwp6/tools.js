const fs = require('fs');
module.exports = {
  testJs: function(name, cb) {
  	console.log(name + 'idi nahyi blyat`');
  	cb();
  },
  asd: function (name, cb) {
  	console.log('asdFun');
  	cb();  
  },
  art_readAll: function (req, res, payload, cb) {
  		let obj;
	console.log('hi im here 33');
	fs.readFile('D:/articles.json', 'utf8', function (err, data) {
		if (err) throw err;
		console.log('hi im here');
		obj = JSON.parse(data);
		cb(null, obj);
  });
}
};
