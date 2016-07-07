function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX,mouseY,50,50);
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