var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  textSize(20);
  text("BLACKLIVESMATTER" x, 250);
  x = x + 5;


  if (x > width) {
    x = 0;


  }
}
