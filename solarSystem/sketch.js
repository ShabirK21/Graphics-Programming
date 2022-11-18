var speed;

function setup() {
  createCanvas(900, 700);
}

function draw() {
  background(0);
  speed = frameCount;

  push();
  translate(width / 2, height / 2);
  rotate(radians(speed / 3));
  celestialObj(color(255, 150, 0), 200); // SUN
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(radians(speed));
  translate(width / 4, height / 4);
  rotate(radians(speed));
  celestialObj(color(0, 0, 255), 80); // EARTH
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(radians(speed));
  translate(width / 4, height / 4);
  rotate(radians(-speed * 2));
  translate(width / 10, height / 10);
  celestialObj(255, 30); // MOON
  pop();
}

function celestialObj(c, size) {
  strokeWeight(5);
  fill(c);
  stroke(0);
  ellipse(0, 0, size, size);
  line(0, 0, size / 2, 0);
}
