function setup() {
  // put setup code here to run once
  createCanvas(windowWidth, windowHeight);

  background(180, 60, 220)

  rectMode(CENTER);
}

function draw() {
  smooth();
  fill(120);
  stroke(40,200,100);
  strokeWeight(10);

  point(mouseX, mouseY);

  noStroke();
  // put drawing code here to run in loop
  ellipse(300, 500, 150, 150);

  stroke(100,255,80);
  strokeWeight(15);
  fill(50, 20, 120);
  rect(800,400,200,300);

  strokeWeight(20);
  noFill();
  triangle(1200, 50, 1300, 600, 950, 400);

  print(mouseX);
}
