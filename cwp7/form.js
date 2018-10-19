function create() {
	alert(1);
	let xhr = new XMLHttpRequest();
	let body = {

		id:Number(id.value),
		title:title.value,
		text:text.value,
		date:date.value,
		author:author.value,
		comments:[]
	};
	alert(body.page);
	alert(2);
	xhr.open('POST', '/articles/create', true);
	alert(3);
	xhr.setRequestHeader('Content-type','application/json');
	alert(4);
	xhr.send(JSON.stringify(body));
	alert(5);
	xhr.onreadystatechange = function (){
	alert(6);
	
	if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
		alert(7);
		alert('created');
	}
}
}