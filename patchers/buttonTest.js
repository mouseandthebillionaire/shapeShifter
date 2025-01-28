inlets = 3;
outlets = 1;
var numPoints = 3;
var targetX = [164, 550, 897];
var targetY = [689, 75, 697];
var targetHit = [0, 0, 0];  // Tracks which targets have been hit
var x = [0, 0, 0];
var y = [0, 0, 0];
var press = [0, 0, 0];

function list() {
    x[inlet] = arguments[0];
    y[inlet] = arguments[1];
    press[inlet] = arguments[2];
    
    // Reset all hits before checking
    targetHit = [0, 0, 0];
    
    // Check each pressed finger against all targets
    for (var i = 0; i < numPoints; i++) {
        if (press[i] >= 1) {
            // Check this finger against all targets
            for (var target = 0; target < numPoints; target++) {
                var xDist = Math.abs(targetX[target] - x[i]);
                var yDist = Math.abs(targetY[target] - y[i]);
                
                // If this finger is close enough to this target, mark it as hit
                if (xDist < 80 && yDist < 80) {
                    targetHit[target] = 1;
                    //post("Target " + target + " hit!\n");
                    break;  // Only let each finger hit one target
                }
            }
        }
    }
    
    checkStates();
}

function checkStates() {
    // Check if all targets have been hit
    if (targetHit[0] == 1 && targetHit[1] == 1 && targetHit[2] == 1) {
        post("boom!\n");
        outlet(0, 1);
    } else {
        outlet(0, 0);
    }
}