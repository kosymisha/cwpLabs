
const fs = require("fs");
let numbers = [];
setInterval(() =>
{
	let max = 10000;
	let rand = Math.floor(Math.random() * max);
	numbers.push(rand);
	fs.writeFileSync(process.argv[2], JSON.stringify(numbers));
	console.log('updated - ' + rand);
}, process.argv[3]);