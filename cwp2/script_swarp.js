

/*
var startID=1;
var indexNAME=0;
var uNames = new Array('misha', 'egor', 'kolya', 'leha', 'sasha', 'vitya', 'alena', 'diana', 'sveta', 'alina', 'anya', 'nika');
for (let n = 0; n < 45; n++){
  if(uNames.length===indexNAME){
    indexNAME = 0
  console.log(uNames[indexNAME] + startID);
  indexNAME++;
}*/

const cp=require('child_process');

var i=0;
var app=cp.fork('client.js');
exec(app);
console.log('asd');
function exec(app) {
	app.on('exit',()=>{

		if(i==process.argv[2])
			return;
		app=cp.fork('client.js');
		exec(app);
		i++;
	});
}
