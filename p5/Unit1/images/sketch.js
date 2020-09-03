var img1, img2, img3;

function setup() {
  createCanvas(800, 800);

  img1 = loadImage("assests/wife.jfif");
  img2 = loadImage("assests/gf.jfif");
  img3 = loadImage("assests/wifewbraids.jfif");
}

function draw() {
  image(img1, width / 2, height / 2, 200, 200);
  image(img2, width / 2, height / 2 - 210, 200, 200);
  image(img3, width / 2, height / 2 + 210, 200, 200);
}
