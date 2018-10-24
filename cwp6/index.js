const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
let myObj = require('./articles.json');
var log_readAll_hand = require('./log_readAll_file');
var art_readAll_hand = require('./art_readAll_file');
var art_read_hand = require('./art_read_file');
var art_create_hand = require('./art_create_file');
var art_delete_hand = require('./art_delete_file');
var art_update_hand = require('./art_update_file');
var com_create_hand = require('./com_create_file');
var com_delete_hand = require('./com_delete_file');
const handlers = {
  '/comments/create':  com_create_hand.c_create, 	   /*  { "id": 12, "articleId": 2, "text": "my com..", "date": "5", "author": "mine"}   */
  '/comments/delete':  com_delete_hand.c_delete, 	   /*  { "articleId": 1, "id": 1 }  */
  '/articles/readall': art_readAll_hand.art_readAll, /*  { "sortField": "title", "sortOrder": "true" }  */
  '/articles/delete':  art_delete_hand.art_delete,   /*  { "id": 1 }  */
  '/articles/read':    art_read_hand.art_read, 		   /*  { "id": 1 }  */
  '/articles/create':  art_create_hand.art_create,   /*  { "id": 12,"title": "news","text": "arttcle is created yo","date": 4,"author": "kesha","comments": []}  */
  '/articles/update':  art_update_hand.art_update,	 /*  { "id": 12,"title": "news","text": "arttcle is created yo","date": 4,"author": "kesha","comments": []}  */
  '/api/logs':         log_readAll_hand.log_readAll  /*  ---  */
};

const server = http.createServer((req, res) => {
   console.log('aaaaaaaaaaaa');
  	parseBodyJson(req, (err, payload) => {
      console.log('aaaaaaaaaaaa');
    	const handler = getHandler(req.url);
      console.log('aaaaaaaaaaaa');
    	if (err && (handler != art_readAll_hand.art_readAll) && (handler != log_readAll_hand.log_readAll)){
    		  res.statusCode = err.code;
        	res.setHeader('Content-Type', 'application/json');
        	res.end( JSON.stringify(err) );
        	return;
    	}
    	handler(req, res, payload, (err, result) => {
      	if (err) {
        	res.statusCode = err.code;
        	res.setHeader('Content-Type', 'application/json');
        	res.end( JSON.stringify(err) );
        	return;
      	}
      	console.log(result);
      	res.statusCode = 200;
      	res.setHeader('Content-Type', 'application/json');
      	res.end( JSON.stringify(result) );
    	});
  	});
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getHandler(url) {
  return handlers[url] || notFound;
}

function notFound(req, res, payload, cb) {
  console.log('aaaaaaaaaaaa');
  cb({ code: 404, message: 'Not foundhiu'});
}

function parseBodyJson(req, cb) {
  console.log('aaaaaaaaaaaa');
  let body = [];
  req.on('data', function(chunk) {
    body.push(chunk);
    console.log(body);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    let params;
    if(body.length != 0){
    	params = JSON.parse(body);
    	cb(null, params);
	}
	else {
		cb( null, null);
  }
  });
}