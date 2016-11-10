// JavaScript Document

//获取json数据
function getText(url,callback){
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.setRequestHeader("Content-type","text/plain;charset=UTF-8");
	request.send();
	
	request.onreadystatechange = function(){
		if(request.status == 200 && request.readyState == 4){
			callback(request.responseText);
			}
		};
	}


//获取XML数据
function getXML(url,callback){
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.setRequestHeader("Content-type","text/plain;charset=UTF-8");
	request.send();
	
	//获取响应
	request.onreadystatechange = function(){
		if(request.status == 200 && request.readyState == 4){
			callback(request.responseXML);
			}
		};
	}









//封装清除数据
function clearData(parentNode){
	Array.prototype.slice.call(parentNode.children,0).forEach(function(item,index){
		parentNode.removeChild(item);
		});
	}