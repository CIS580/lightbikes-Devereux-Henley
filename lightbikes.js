var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var speed = 1/16/1000;

var x = 0;
var y = 0;

var input = {
	up: false,
	down: false,
	left: false,
	right: false
}

window.onkeydown = function(event) {
	switch (event.key) {
		case "ArrowDown":
			event.preventDefault();
			input.down = true;
			break;
		case "ArrowLeft":
			event.preventDefault();
			input.left = true;
			break;
		case "ArrowRight":
			event.preventDefault();
			input.right = true;
			break;
		case "ArrowUp":
			event.preventDefault();
			input.up = true;
			break;
		default:
			return;
	}
}

window.onkeyup = function(event) {
	console.log(event.key);
	switch (event.key) {
		case "ArrowDown":
			event.preventDefault();
			input.down = false;
			break;
		case "ArrowLeft":
			event.preventDefault();
			input.left = false;
			break;
		case "ArrowRight":
			event.preventDefault();
			input.right = false;
			break;
		case "ArrowUp":
			event.preventDefault();
			input.up = false;
			break;
		default:
			return;
	}
}

function loop() {
	ctx.fillRect(x, y, 50, 50);
	if(input.up) y-= 1;
	if(input.down) y+=1;
	if(input.left) x-=1;
	if(input.right) x+=1;
	ctx.fillStyle = "#404040";
	setTimeout(loop, speed);
}
loop();

