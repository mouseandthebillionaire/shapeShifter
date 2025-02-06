inlets = 3;
outlets = 2;

var numTouched;

var press = [0, 0, 0];
var lastPress = [0, 0, 0];


function list(){
	press[inlet] = arguments[2];
	if(press[inlet] != lastPress[inlet]){
		lastPress[inlet] = press[inlet];
		
	} 
	checkNumTouched();	

}

function checkNumTouched() {
    numTouched = 0;
    for(var i = 0; i < press.length; i++) {
        if(press[i] > 0) {
            numTouched++;
        }
    }
    outlet(0, numTouched);
	outlet(1, 1);
}
