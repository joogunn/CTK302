var x = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);



ellipse(250,x,50,50);
x=x+5;

if (x > height) {
  x=0;
}
 

}
