
var box1;
var box2
var box3
function setup() {
  createCanvas(600, 400);
  box1=new Box();
  box2=new Box();
  box3=new Box();
}

function draw() {
  background(220);
  box1.show();
  box1.set_width(500);
  box2.show();
  box2.set_width(250);
  box3.show();
  box3.set_width(100);
  
}

