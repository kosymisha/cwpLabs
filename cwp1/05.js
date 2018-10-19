var dir=process.argv[2];
const fs=require('fs');
if(process.argv.length<3)
{
	console.log('path error');
	return;
}
if(process.argv[3]!=null)
{
	console.log('write path in " "');
	return;
}

dir=dir.replace(/\\/g, "/");

var str=`const fs=require('fs');
var jsonValue=[];
dir='`+dir+`';
check(dir);
var director=whatIsDirName(dir);
fs.mkdir(dir+'/'+director,()=>{	console.log('');});
whatIsDirName(dir);
var arr=copyFIND(dir,fs);

function check(file) {
fs.stat(file,(err,stats)=>
{
	console.log(''+file.replace(new RegExp (dir, 'g'), ''));
	if(stats.isDirectory())
	{
	fs.readdir(file,(err,files)=>{
	for (var i = 0; i <files.length; i++) {
	var dirPath=file+'/'+files[i];
	check(dirPath);
	}
	});
	}
})
}

function whatIsDirName(dir)
{
	var lastIndex=dir.lastIndexOf('/');	
	var director=dir.substring(lastIndex+1);
	return director;
}

function checkTxt(file)
{
	var lastIndex=file.lastIndexOf('.');
	var extension=file.substring(lastIndex+1);
	if(extension=='txt') {return true;}
	else {return false;}
}
function copyFIND(dir,fs)
{
	var director=whatIsDirName(dir);
	var destArr=[];
	fs.readdir(dir,(err,files)=>{
			for(var i=0;i<files.length;i++)
			{
				if(checkTxt(files[i]))
				{
				let src=dir+'/'+files[i];
				let dest=dir+'/'+director+'/'+files[i];
				destArr.push(dest);
				fs.copyFile(src,dest,(err)=>{addCopyright(dest,fs);});				
				}}});return destArr;
}

function addCopyright(dest,fs)
{
	var buffer;
	
	fs.readFile(dest, function(error,data){            								
        jsonValue.push(data);
        data='©'+data+'©';
        buffer=Buffer.from(data);
        fs.open(dest, 'r+', function(err, fd) {	
  		fs.write(fd,buffer,0,buffer.length,0, function(err, written,string) {
  		fs.close(fd, function() {
  		watchDIR(dest,fs);
  		var out=JSON.stringify(jsonValue);
  		fs.writeFile("config.json", out, function(err) { });
});});});});}

function watchDIR(file,fs)
{
	fs.watch(file,(eventType,filename)=>{
		if (eventType=='rename') {	console.log(filename + ' renamed');	}
		if(eventType=='change')	{console.log(filename + ' changed');}
	})
}`;


fs.writeFile(dir+'/summary.js',str,()=>{console.log('its ok!');});

const cp=require('child_process');
cp.fork(dir+'/summary.js');