var img;
var x = 0;
var mic;
var vol;
let myState = 0;

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  img = loadImage("assests/creepycat.jpg");

  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  background('black');

  vol = (mic.getLevel()).toFixed(2);

  switch (myState) {
    case 0:
    textSize(30);
      fill('white');
      text("Hello, this is Creepy Cat! Click to get started", width/2, height/2);
      cat();
      break;


    case 1:
    textSize(30);
      fill('white');


      text("I'M MOVING", width/2, height/2);


      if (vol > .001) { // if the volume is LOUD?
        // do something

        x = x + (5 * vol * 100);
      }

      if (vol > .2) {
        myState = 2;
      }


      push();
      translate(x, 0);

      cat();

      if (x > width) {
        x = -300;
      }
      pop();

      break;

    case 2:
    textSize(30);
      fill('white');
      text("IIGHT IMMA HEAD OUT", width/2, height/2);
      break;
  }




}


function cat() {
  translate(0, 100);
  image(img, width / 2, height / 2, 200, 200);
}

function touchStarted() {
  getAudioContext().resume();
}


function mouseReleased() {

  myState++;
  if (myState > 2) {
    myState = 0;
  }

}
