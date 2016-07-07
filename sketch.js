function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function touchMoved() {
  fill(0);
  ellipse(touchX, touchY, 50, 50);
  // prevent default
  return false;
}

function mousePressed() {
  fill(0);
  ellipse(mouseX, mouseY, 50, 50);
  // prevent default
  return false;
}