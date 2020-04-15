var r = 50;
var g = 50;
var b = 50;




function setup() {
  createCanvas(1200,200);
}

function draw() {
  r = map(mouseX,0,1200,120,220);
  g = map(mouseX,0,1200,100,150);
  b = map(mouseX,0,1200,100,150);
  background(r,g,b)
  ellipse(mouseX,200, 25,25)
}