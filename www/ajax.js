var ajax = {}; //map ajax namspace

ajax.get = function (url,callback) {

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function (){
		if(xmlhttp.readyState == 4 && xmlhttp.status ==200){

			callback(xmlhttp.responseText);
		}
	}

	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}