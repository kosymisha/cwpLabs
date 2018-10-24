function create() {
	
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
	
	xhr.open('POST', '/articles/create', true);
	
	xhr.setRequestHeader('Content-type','application/json');
	
	xhr.send(JSON.stringify(body));
	
	xhr.onreadystatechange = function (){
	
	
	if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
		alert(7);
		alert('created');
	}
}
}