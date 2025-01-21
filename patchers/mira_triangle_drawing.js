// Global variables to store touch data
var touchPoints = {};
var numTouches = 0;

function list() {
    var a = arrayfromargs(arguments);
    // Extract X, Y, Touch ID, and touch state (down/move/up)
    var x = a[0];
    var y = a[1];
    var touchState = a[3]; // Touch state: 1 = down/move, 0 = up
    var touchId = a[2]; // Touch ID

    // If the touch state is 1 (touch down or move), store the touch
    if (touchState === 1) {
        touchPoints[touchId] = {x: x, y: y};
    } else {
        // If touch is up (removed), remove the touch from the list
        delete touchPoints[touchId];
    }

    // Update number of touches
    numTouches = Object.keys(touchPoints).length;

    // Redraw the triangle if exactly 3 touches
    if (numTouches === 3) {
        drawTriangle();
    }
}

function region(){
	return;
}

function drawTriangle() {
    post("Drawing triangle. Touch points: ", JSON.stringify(touchPoints), "\n");

    outlet(0, "clear");

    var points = [];
    for (var id in touchPoints) {
        if (touchPoints.hasOwnProperty(id)) {
            points.push(touchPoints[id]);
        }
    }

    // Set color to red
    outlet(0, "frgb", 255, 0, 0);

    // Get the lcd size (width and height)
    var lcdWidth = 400;  // Adjust this based on your lcd size
    var lcdHeight = 300; // Adjust this based on your lcd size

    // Convert normalized coordinates to pixel values
    var polylinePoints = [];
    for (var i = 0; i < points.length; i++) {
        var xPixel = points[i].x * lcdWidth;
        var yPixel = points[i].y * lcdHeight;
        polylinePoints.push(xPixel, yPixel);
    }

	post(polylinePoints.join());

    // Send paintpoly message with pixel coordinates
    outlet(0, "paintpoly", polylinePoints.join());
}
