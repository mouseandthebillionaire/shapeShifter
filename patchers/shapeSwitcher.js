inlets = 3;
outlets = 1;

var numTouched;

var press = [0, 0, 0];

function list(){
	press[inlet] = arguments[2];
	checkNumTouched();
	
	if(arguments[0] == "0."){
		checkNumTouched();
	}
	
}

function checkNumTouched() {
    numTouched = 0;
    for(var i = 0; i < press.length; i++) {
        if(press[i] > 0) {
            numTouched++;
        }
    }
    outlet(0, numTouched);
}