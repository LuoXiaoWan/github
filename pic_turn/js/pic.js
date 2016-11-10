//获取左侧图片
window.onload = function(){
	var oMove = document.getElementById("imageMove");
	//运动函数
	function funMove(pos){
		var move = function(){
			var curPos = parseInt(oMove.style.top,10);
			var speed = 60;
			if(Math.abs(curPos-pos)>speed){
				//判断移动方向
				curPos-=((curPos-pos)/Math.abs(curPos-pos))*speed;
				oMove.style.top = curPos+"px";
				setTimeout(move,30);
			}else{
				oMove.style.top = pos + "px";
			}
		};
		setTimeout(move,10);
	};
	var oClick = document.getElementById("imageLeft").getElementsByTagName("a");
	for(var i=0; i<oClick.length; i+=1){
		var flag = 0;
		var timeout;
		//鼠标经过播放动画
		oClick[i].onmouseover = function(i){
			return function(e){
				clearTimeout(timeout);
				oClick[flag].className = "";
				this.className = "on";
				funMove(-390*i);
				flag = i;
			}
		}(i);
		oClick[i].onmouseout = function(i){
			return function(e){
				timeout = setTimeout(step,3000);
			}
		}(i);
		//定时器播放动画
		if(i === 0){
			var step = function(){
				oClick[flag].className = "";
				flag = flag>=oClick.length-1?0:flag+1;
				oClick[flag].className = "on";
				funMove(-390*flag);
				timeout = setTimeout(step,3000);
			};
			setTimeout(step,3000);
		}
	}
};