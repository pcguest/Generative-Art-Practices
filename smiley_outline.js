let organicForms = [];

function setup() {
  createCanvas(600, 600);
  noLoop();  // Only draw once

  // Create several organic shapes with random positions, sizes, and 
variations
  for (let i = 0; i < 5; i++) {
    let form = new OrganicShape(random(100, width - 100), random(100, 
height - 100), random(80, 150), random(0.4, 0.8));
    form.generateShape();
    organicForms.push(form);
  }
}

function draw() {
  background(255);  // Clear the canvas with a white background
  organicForms.forEach(form => {
    form.drawShape();   // Draw the outline of each organic shape
    form.stippleShading();  // Apply the enhanced stippling shading effect 
inside each shape
  });
}

class OrganicShape {
  constructor(x, y, baseRadius, variation) {
    this.x = x;
    this.y = y;
    this.baseRadius = baseRadius;
    this.variation = variation;
    this.points = [];
  }

  // Generate a sharp, jagged shape using Perlin noise and randomness
  generateShape() {
    this.points = [];
    let noiseScale = 1.0;  // Increase the noise scale for more pronounced 
randomness
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / 150) {  // High 
resolution for detailed shapes
      let noiseFactor = noise(cos(angle) * noiseScale, sin(angle) * 
noiseScale);
      
      // Create jagged, uneven protrusions and dips
      let randomJaggedness = random(0.8, 2);  // Introduce larger 
variations to create sharp points
      let r = this.baseRadius + map(noiseFactor * randomJaggedness, 0, 1, 
-this.variation * this.baseRadius, this.variation * this.baseRadius * 
2.5);  // Sharper protrusions
      
      // Calculate x and y based on angle and radius
      let x = r * cos(angle);
      let y = r * sin(angle);
      this.points.push(createVector(x, y));
    }
  }

  // Draw the generated jagged, organic shape
  drawShape() {
    push();
    translate(this.x, this.y);
    noFill();
    stroke(0);
    strokeWeight(1);  // Thin stroke for the outline
    beginShape();
    this.points.forEach(p => vertex(p.x, p.y));
    endShape(CLOSE);
    pop();
  }

  // Enhanced stippling effect for shading inside the shape
  stippleShading() {
    let stipplingDensity = 4000;  // Number of dots inside the shape for 
dense shading
    for (let i = 0; i < stipplingDensity; i++) {
      let p = this.randomPointInside();  // Get a random point inside the 
shape
      if (p) {
        let distToCenter = dist(this.x, this.y, p.x, p.y);
        let maxDist = this.baseRadius;

        // Larger dots in darker, shadowed areas (closer to the center or 
concave regions)
        let shadowFactor = map(distToCenter, 0, maxDist, 1, 0);
        let

