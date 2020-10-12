function setup() {
  // put setup code here to run once
  createCanvas(windowWidth, windowHeight);

  background (250,10,100)

}

function draw() {
  // put drawing code here to run in loop
  stroke(10)
//triangle
  fill(255,255,255)
  triangle(100,500,400,60,700,500)
//iris
  fill(20,50,100)
  ellipse(400,360,350,275)
//pupil
  fill(random(255),random(255),random(255))
  ellipse(400,360,100,100)
//eyelashes
  stroke(50)
  line (400,150,400,223)
  line (350,160,360,230)
  line (450,160,430,230)

}
