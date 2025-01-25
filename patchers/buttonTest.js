inlets = 3;
outlets = 1;

var numPoints = 3;

var buttonStates = [0, 0, 0];
var allPressed = false;
var x = [0, 0, 0];
var y = [0, 0, 0];
var press = [0, 0, 0];
var on = [0, 0, 0];

var targetX = [245, 600, 940];
var targetY = [600, 115, 600];
var xDist = [100, 100, 100];
var yDist = [100, 100, 100];

function list() {

	x[inlet] = arguments[0];
	y[inlet] = arguments[1];
	press[inlet] = arguments[2];
	
	if(press[inlet] >= 1){	
		xDist[inlet] = Math.abs(targetX[inlet] - x[inlet]);
		yDist[inlet] = Math.abs(targetY[inlet] - y[inlet]);
		post(xDist[inlet] + ":" + yDist[inlet] + "\n");
		
		if(xDist[inlet] < 100 && yDist[inlet] < 100){
			on[inlet] = 1;
			post("on it!");
			checkStates();
		} else {
			on[inlet] = 0;
		}
	} else {
		on[inlet] = 0;
	} 
	checkStates();
	
}

function checkStates(){
	if(on[0] == 1 && on[1] == 1 && on[2] == 1){
		post("boom!");
		outlet(0, 1);
	} else {
		outlet(0, 0);
	}	
}
