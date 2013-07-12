var mouse = {
	x: 0,
	y: 0
}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();
var Game = {
	FPS: 20,
	Tick: function(){
		Game.Update();
		Game.Draw();
	},
	Draw: function(){
		
	},
	Update: function(){
		
	},
	Distance: function(x,y,x2,y2){
		var answer = (x2 - x)*(x2 - x) + (y2 - y)*(y2 - y);
		answer = Math.round(Math.sqrt(answer));
		return answer;
	},
	Random: function(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
};
setInterval(Game.Tick,1000/Game.FPS);
document.onkeydown = function(e){
	e = e || window.event;
	c = e.keyCode;
};
document.onkeyup = function(e){
	e = e || window.event;
	c = e.keyCode;
};
document.onmousemove = function mouseMove(e){
	e = e || window.event;
	mouse.x = e.pageX - rect.left || e.clientX - rect.left;
	mouse.y = e.pageY - rect.top || e.clientY - rect.top;
};
document.onmousedown = function mouseDown(e){
	e = e || window.event;
	mouse.down = true;
};
document.onmouseup = function mouseUp(e){
	e = e || window.event;
	mouse.down = false;
};