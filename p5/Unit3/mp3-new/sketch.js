let cars = [];
let i1;
let bg;
let frogPos;
let maxCars = 5;
let state = 0;
let timer = 0;
let song1 ;

function preload() {
  song1 = loadSound("assests/gamesound.mp3");
  song1.loop();
  song1.pause();
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  frogPos = createVector(width / 2, height - 80);

  i1 = loadImage("assests/asteriod.png");
  bg = loadImage("assests/space.jpg");
  rocket = loadImage("assests/rocket.png");
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }



}

function draw() {
  switch (state) {
    case 0:
      background('black');
      fill('white');
      textSize(60);
      text("Welcome to my game", width / 2, height / 2);
      break;

    case 1:
      game();
      song1.play();
      timer++
      if (timer > 10 * 60) {
        state = 3;
      }
      break;

    case 2:
      background('red')
      fill('white');
      textSize(20);
      text("YAY YOU WON", width / 2, height / 2);
      break;

    case 3:
      background('purple');
      text("BOO YOU LOST", width / 2, height / 2);
      break;

  }

}

function game() {

  image(bg, 0, 0, width, height);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();



    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
  if (cars.length == 0) {
    state = 2;
  }


  image(rocket, frogPos.x, frogPos.y, 90,90);
  checkForKeys();
}

function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
}




function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;

  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: //they won
      resetTheGame();
      state = 0;
      break;

    case 3: //they lost
      resetTheGame();
      state = 0;
      break;
  }
}


class Car {
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.images = i1;
  }

  display() {
    image(this.images, this.pos.x, this.pos.y, 50, 50);

  }



  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
