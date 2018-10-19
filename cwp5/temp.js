/*
const myObj = require('D:/articles.json');
for (let i = 0; i < myObj['articles'].length; i++ ){
	console.log(myObj['articles'][i]['text']);
}


var newTemp = { "numbers": [ {"number": 5 }, { "number": 6 }, { "number": 7 }, { "number": 8 }, { "number": 9 } ] };

console.log('before --- ');
console.log(newTemp);
console.log(' --- ');
newTemp['numbers'].splice(5, 1);
console.log(newTemp);
*/




// const fs = require('fs');
// var asd = { 'requests': [ {'date':'', 'request': '', 'body': ''} ] }
// let s = JSON.stringify(asd);

// fs.writeFile("./log.json", s, function(err) { });
var people = [
    {
        "f_name": "john",
        "l_name": "doe",
        "sequence": "2",
        "title" : "president",
        "url" : "google.com",
        "color" : "333333",
    },
    {
        "f_name": "john",
        "l_name": "aoe",
        "sequence": "1",
        "title" : "president",
        "url" : "google.com",
        "color" : "333333",
    },
    {
        "f_name": "john",
        "l_name": "cdoe",
        "sequence": "3",
        "title" : "president",
        "url" : "google.com",
        "color" : "333333",
    }
    // etc
];
sortResults("sequence", false)
function sortResults(prop, asc) {
    people = people.sort(function(a, b) {
    	console.log('-----------------------------');
    	console.log(a);
    	console.log('-----------------------------');
    	console.log(b);
    	console.log('-----------------------------');
        if (asc) {
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
    showResults();
}
function showResults() {
	console.log(people);
}



