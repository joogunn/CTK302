function setup() {
  createCanvas(800, 800);
}

function draw() {
  strokeWeight(6);
  if (mouseIsPressed) {
    background('pink');
  } else {
    background('grey');
  }
push();
translate(0,100);
  fill(130, 87, 38);
ellipse(223,171,200,300);
rect(177,312,100,200);
//eyeballs
fill('white');
ellipse(188,118,50,50);
ellipse(259,118,50,50);
//nose
fill('black');
triangle(217,137,199,178,229,176);
//hair
fill(0);
ellipse(287,48,40,40);
ellipse(262,28,40,40);
ellipse(236,21,40,40);
ellipse(207,16,40,40);
ellipse(179,25,40,40);
ellipse(160,39,40,40);
ellipse(220,-20,70,70);



fill(130, 87, 38);
if (mouseIsPressed) {
  arc(222, 200, 130, 100, 0, PI); // smile - (this line is correct)
} else {
  arc(222, 240, 130, 100, PI, 0); // frown

}
pop();
}

function mousePressed() {

console.log(mouseX + ","+ mouseY);

}
