
let loading;
let error;
let posX;
let posY;
function preload(){
  loading = loadImage("images/loading.png")
  error = loadImage("images/error.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(95,95,95);
frameRate(10);
   }


function draw() {


  for(let i=0; i < 50; i++){
    frameRate(5);
  image(loading, random(windowWidth), random(windowHeight), 100, 130);
  frameRate(1);
  image(error,random(windowWidth), random(windowHeight), 300,400);
  }


}
