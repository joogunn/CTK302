var img;
var x = 0;
var mic;
var vol;
//let myState = 0;

function setup() {
  createCanvas(800, 800);

  img = loadImage("assests/creepycat.jpg");

  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  background('black');
//  switch (myState) {
  //  case 0:
    //  fill('white');
      //text("DO NOT YELL", 250, 250);
      //break;

  //  case 1:
    //  fill('white');
    //  text("I'M MOVING", 250, 250);
    //  break;

  //  case 2:
    //  fill('white');
    //  text("YOU'RE TOO LOUD", 250, 250);
    //  break;
      vol = (mic.getLevel()).toFixed(2);

      if (vol > .001) { // if the volume is LOUD?
        // do something

        x = x + 10;
      }

      push();
      translate(x, 0);

      cat();
      x = x + 5;
      if (x > width) {
        x = -300;
      }
      pop();


  }

  function cat() {
    translate(0, 100);
    image(img, width / 2, height / 2, 200, 200);
  }

  function touchStarted() {
    getAudioContext().resume();
  }
