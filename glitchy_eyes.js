let colors;
let spacing = 25;           // Larger spacing for fewer shapes
let maxDistort = 5;         // Minimal distortion for a subtle glitch 
effect
let noiseScale = 0.04;      // Moderate noise scale for performance

function setup() {
  createCanvas(800, 800);   // Create a canvas of size 800x800 pixels
  noLoop();  // Draw once for generative art
  colors = [
    color(230, 90, 50),  // Orange-red
    color(20, 20, 20),   // Black
    color(40, 160, 90),  // Muted green
    color(240, 200, 150) // Pale beige
  ];
  drawPattern();
}

function drawPattern() {
  background(240);  // Light background for contrast

  // Define smiley face parameters to draw shapes that create an outline 
of the eyes only
  let faceCenterX = width / 2;
  let faceCenterY = height / 2;
  let eyeOffsetX = 100;
  let eyeOffsetY = 80;
  let eyeSize = 50;

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      // Apply a small distortion using noise for a subtle effect
      let xDistort = map(noise(x * noiseScale, y * noiseScale), 0, 1, 
-maxDistort, maxDistort);
      let yDistort = map(noise(x * noiseScale + 50, y * noiseScale + 50), 
0, 1, -maxDistort, maxDistort);

      let posX = x + xDistort;
      let posY = y + yDistort;

      let shapeSize = spacing * 0.7;  // Fixed size for consistency
      let col;

      // Determine if the current position is part of the eyes
      let isInEyeLeft = dist(posX, posY, faceCenterX - eyeOffsetX, 
faceCenterY - eyeOffsetY) < eyeSize / 2;
      let isInEyeRight = dist(posX, posY, faceCenterX + eyeOffsetX, 
faceCenterY - eyeOffsetY) < eyeSize / 2;

      if (isInEyeLeft || isInEyeRight) {
        col = colors[2];  // Use muted green for eyes
      } else {
        col = colors[int(random(colors.length))];  // Random color for the 
background pattern
      }

      fill(col);
      noStroke();

      // Draw shapes symmetrically across four quadrants
      push();
      translate(width / 2, height / 2);

      drawMirroredShape(posX - width / 2, posY - height / 2, shapeSize);
      drawMirroredShape(-posX + width / 2, posY - height / 2, shapeSize);
      drawMirroredShape(posX - width / 2, -posY + height / 2, shapeSize);
      drawMirroredShape(-posX + width / 2, -posY + height / 2, shapeSize);
      
      pop();
    }
  }
}

// Function to draw a simple shape
function drawMirroredShape(x, y, size) {
  // Alternate between an ellipse and a rectangle
  if (random(1) > 0.5) {
    ellipse(x, y, size, size);
  } else {
    rect(x - size / 2, y - size / 2, size, size);
  }
}
