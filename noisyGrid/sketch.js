var stepSize = 20;

function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid() {
  // your code here
  for (var x = 0; x < 25; x++) {
    for (var y = 0; y < 25; y++) {
      push();
      var nX = noise(
        (x * stepSize) / 1000,
        (y * stepSize) / 1000,
        (frameCount - mouseX) / 100
      );
      var c = lerpColor(color(255, 0, 0), color(0, 255, 0), nX);
      noStroke();
      fill(c);
      rect(x * stepSize, y * stepSize, stepSize, stepSize);
      pop();
    }
  }
}
///////////////////////////////////////////////////////////////////////
function compassGrid() {
  // your code here
  for (var x = 0; x < 25; x++) {
    for (var y = 0; y < 25; y++) {
      push();
      var nX = noise(x / 1000, y / 1000, (frameCount - mouseX) / 10000);
      var angle = map(nX, 0, 1, 0, 720);
      translate(x * stepSize + stepSize / 2, y * stepSize + stepSize / 2);
      rotate(angle);
      line(0, 0, 0, stepSize);

      pop();
    }
  }
}
