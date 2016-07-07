function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    stroke(0);
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX,mouseY,50,50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}