class ParticleSystem {
  constructor() {
    this.particles = [];
  }

  addParticle(position) {
    this.particles.push(new Particle(position));
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}
