let cars = [];
var img;


function setup() {
  createCanvas(500, 500);
  img = loadImage("assests/fire.jpg") ;



  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
noStroke() ;
}

function draw() {
  background('black');
    image(img, width/2, height/2, 250, 180);
  //img = loadImage("assests/fire.jpg") ;



  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i,1) ;
    }


  }
}




  class Car {

    constructor() {
      //attributes
      this.pos = createVector(width / 2, height-80);
      this.vel = createVector(random(-.8, .8), random(-10, -5));
      this.r =  random(255) ;
      this.g = random(255);
      this.b = random(255);
      this.a = random(200, 255);
      this.s = random(5,20);
    }
    //methods


    display() {
      fill(this.r, this.g, this.b, this.a,);
      ellipse(this.pos.x, this.pos.y, this.s);
    }
    move() {
      this.pos.add(this.vel);
      this.a = this.a -5 ;
      // if (this.pos.x> width) this.pos.x = 0;
      // if (this.pos.x <0 ) this.pos.x = width;
      // if (this.pos.y > height) this.pos.y = 0;
      // if (this.pos.y < 0) this.pos.y = height;
    }
  }
