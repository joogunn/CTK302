var f, f1 ;
function setup() {
createCanvas(800,800);

f= loadFont("assests/blue.otf");
f1= loadFont("assests/goldie.ttf");
textAlign(CENTER);
}

function draw() {
background(100);

textFont(f);
textSize(60);
text("Hello" , width/2, height/2);

textFont(f1);
textSize(30);
text("to eachother",width/2, height/2+80);
}
