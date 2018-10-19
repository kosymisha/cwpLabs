function get(){
	alert('asd');
let xhr= new XMLHttpRequest();
let body = { id :Number(page.value) };
alert(xhr.readyState);
	alert('s');
xhr.open('POST', '/articles/readall', true);
alert(xhr.readyState);
	alert('q');
xhr.setRequestHeader('Content-type','application/json');
alert(xhr.readyState);
xhr.send(JSON.stringify(body));
alert('zxc');
alert(xhr.readyState);
xhr.onreadystatechange = function (){
alert('asd');

}
}
function deleteNodes(id)
{
	 var myNode = document.getElementById(id);
				while (myNode.firstChild) {
    				myNode.removeChild(myNode.firstChild);
					}
}