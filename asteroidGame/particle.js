class Particle {
  constructor(position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  display() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(255, 69, 0);
    ellipse(this.position.x, this.position.y, 6, 6);
  }

  isDead() {
    return this.lifespan < 0;
  }
}
