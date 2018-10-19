const fs = require('fs');
let logs = require('./log.json');
let myObj = require('./articles.json');		
module.exports = {
  art_readAll: function (req, res, payload, cb) {
  	//sortResults(payload.sortField, payload.sortOrder);
  	cb(null, myObj);
  }
};
// function sortResults(prop, asc) {
//     suka = suka.sort(function(a, b) {
//         if (asc === "true") {
//             return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
//         } else {
//             return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
//         }
//     });
//     showResults();
// }
// function showResults() {
// 	console.log(suka);
// }
