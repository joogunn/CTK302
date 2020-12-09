let numberOfTouches ;
var img1, img2;
let state = 0;

function setup() {
  createCanvas(400, 400);

  img1 = loadImage("assets/fingers-two.jpg");
  img2 = loadImage("assets/threefingers.jpg");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length; //automatically available to us
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
      // put a picture here

      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22) ;
            // put a picture here
            image(img1, width/2, height/2, 200, 200);
      break ;

      case 3:
     text("three are touching the screen", 5, 22) ;
     image(img2, width/2, height/2, 200,200);
            // put a picture here
      break ;


  }

}
function mouseReleased(){
  state++;
  if(state>3){
    state = 0 ;
  }
}
