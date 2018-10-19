const fs = require('fs');
let logs = require('./log.json');
let myObj = require('./articles.json');		
let result = 
{
	'items': [{}],
	'meta': {
		'page': 0,
		'pages': 0,
		'count': 0,
		'limit': 0
	}
};

module.exports = {
  art_readAll: function (req, res, payload, cb) {
  	if (payload != undefined) {	
  	  	sortResults(payload.sortField, payload.sortOrder, payload, cb);
    }
    else
    {
    	sortResultsW("date", "false", cb);
    }
  }
};
let myObjS = [];
function sortResults(prop, asc, payload, cb) {
    myObjS = myObj['articles'].sort(function(a, b) {
        if (asc === "true") {
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
    comm (myObjS, payload, cb, (narr, payl, cbb) => {
    	if (payl.limit && payl.page) { boxing(narr, payl, cbb); }
        else { cbb(null, narr); }
    } );
}

function comm (arr, payload, cb, cbnow) {
	if(payload.includeDeps)
    {
    	if(payload.includeDeps === 'false'){
    		for(let i = 0; i < arr.length; i++){
    			delete arr[i]['comments'];
    		}
    		cbnow(arr, payload, cb);
    	}
    	if(payload.includeDeps === 'true'){
            // for (let i = 0; i < arr.length; i++){
            //     arr[i]['comments'] = myObjS[i]['comments'];
            // }
    		cbnow(myObjS, payload, cb);
        }
	}
	else{
		for(let i = 0; i < arr.length; i++) { delete arr[i]['comments']; }
    	cbnow(arr, payload, cb);
	}
}
function boxing (arr, payload, cb){
	console.log(arr['articles']);
	result['meta']['limit'] = payload.limit;
	console.log(arr.length);
	console.log(arr.length / payload.limit);
	result['meta']['pages'] = Math.floor(arr.length / payload.limit);
	if (arr.length % payload.limit > 0) result['meta']['pages'] += 1;
	result['meta']['count'] = arr.length;
	result['meta']['page'] = payload.page;
	let j = 0;
	for (let i = ((payload.page - 1) * payload.limit); i < payload.page * payload.limit && i < arr.length; i++){
		if (arr[i] != null)
			result['items'][j] = arr[i];
		j++;
	}
    cb(null, result);
}




function sortResultsW(prop, asc, cb) {
    let myObjS = myObj['articles'].sort(function(a, b) {
        if (asc === "true") {
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
    cb(null, myObjS);
}