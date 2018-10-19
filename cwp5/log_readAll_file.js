const fs = require('fs');
let logs = require('./log.json');
let myObj = require('./articles.json');
module.exports = {
  log_readAll: function (req, res, payload, cb) {
  	cb(null, logs);
}
};