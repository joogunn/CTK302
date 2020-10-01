let timer = 0;
let state = 0;
var mic;
var vol;

function setup() {
  createCanvas(500, 500);
  textSize(24);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1


  switch (state) {
    case 0:
      background('red');
      text('shh', 250, 250);
      if (vol > .01) {
        state = 1;
      }

      break;

    case 1:
      background('green');
      text('quiet down', 250, 250);
      timer = timer + 1;
      if (timer > 5 * 60) {
        state = 0;
        timer = 0;
      }
      break;

  }
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

}

function touchStarted() {
  getAudioContext().resume();
}
