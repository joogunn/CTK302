var bubbles = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1NLihyFAzkdOLevtb8F9sZ4PK8z37iFg5nIrO8ZancSI';
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Island, data[i].Job, data[i].Fight, data[i].Memory, data[i].Forest, data[i].Power )); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('blue');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myIsland, myJob, myFight, myMemory, myForest, myPower ) {
    this.Name = myName;
    this.Island = myIsland;
    this.Job = myJob;
    this.Fight = myFight;
    this.memory = myMemory;
    this.forest = myForest;
    this.Power = myPower;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1,3) ;

  }


  display() {
    //if (this.shape == "Square") {
    //  rect(this.pos.x, this.pos.y, 50, 50);
  //  } else {
    //  ellipse(this.pos.x, this.pos.y, 50, 50);
//}
    fill(255,30);
    ellipse(this.pos.x, this.pos.y, 50, 50);
    text(this.Name, this.pos.x, this.pos.y, -70, -60);
    text(this.Island, this.pos.x, this.pos.y+10);
    text(this.Job, this.pos.x, this.pos.y-10);
    text(this.Fight, this.pos.x, this.pos.y+10);
    text(this.Memory, this.pos.x, this.pos.y-10);
    text(this.Forest, this.pos.x, this.pos.y+10);
    text(this.Power, this.pos.x, this.pos.y-10);
  }

  drive() {
    this.pos.x+=this.vel;
    if (this.pos.x > width) this.pos.x = 0 ;
  }


}
