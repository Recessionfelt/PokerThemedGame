let img, img2, img3;

let flipNfindIMG, memInMotionIMG, colorMatchIMG;
let card1Label, card2Label, card3Label;
let chip1, chip2, chip3;


let dy1 = 0;
let dx = 0.5;
let dy = 0.1;

let c1Targety = 80;
let c2Targety = 190;

let c1x = 140;
let c1y = -200;
let c2x = 140;
let c2y = -200;

let delayCounter = 0;
let delayFrame = 60;

let isCardFinished = false;
let isCardSliding = false;

let pgNumber = 0; 

let startButton;

function preload() {
  img = loadImage('./istockphoto-672556284-612x612.jpg');
  img2 = loadImage('./playing card 3.png');
  img3 = loadImage('./playing card 2.png');
  
  card1Label = loadImage('./card1.png');
  card2Label = loadImage('./card2.png');
  card3Label = loadImage('./card3.png');
  
  chip1 = loadImage('./chip1.svg');
  chip2 = loadImage('./chip2.svg');
  chip3 = loadImage('./chip3.svg');
  
  flipNfindIMG = loadImage('./flipNfindIMG.jpg');
  memInMotionIMG = loadImage('./memInMotionIMG.jpg');
  colorMatchIMG = loadImage('./colorMatchIMG.jpg');
}

function setup() {
  createCanvas(280, 440); //280, 440
  angleMode(DEGREES);
  
  startButton = createButton('Start');
  
  startButton.size(150, 50); 
  startButton.style('border', 'none');
  startButton.style('background-color', 'transparent');
  startButton.style('color', 'red');
  startButton.style('font-weight', 'bold');
  startButton.style('font-size', '20px');
  startButton.style("font-family", "Rockwell");

}

function draw() {
  
  if (pgNumber == 0) {
    drawPg1();
  }
  if (pgNumber == 1) {
    drawPg2();
  }
  if (pgNumber == 2) {
    drawPg3();
  }
  if (pgNumber == 3) {
    drawPg4();
  }
  if (pgNumber == 4) {
    drawPg5();
  }
  if (pgNumber == 5) {
    drawPg6();
  }
}

function drawPg1() {
  pgNumber = 0;  
  
  background(40);
  tint(250,100)
  image (img, 0,0, 440, 440)
  
  tint (250, 250)
  
  if (delayCounter < delayFrame)
  {
    
    delayCounter += 0.5
  }
  else
  {
    if (!isCardFinished)
    {
       c1y += (c1Targety - c1y) * dy;
    
      if (Math.abs(c1Targety - c1y) < 1) 
      {
        c1y = c1Targety
        isCardFinished = true;
      }   
    }
    
    else 
    {
      c2y += (c2Targety - c2y) * dy;
    }
    
  }  
   
  image(img3, 80, c1y, 120, 170);
  startButton.position(c1x - 75, c1y + 65);
  
  image(img2, 140, c2y, 120, 170);
  
  fill ('red');
  textFont('Rockwell', 18);
  textAlign(CENTER);
  textStyle('bold');
  text('Eclispe CO.', c2x + 60, c2y + 90)
  
  
  startButton.mousePressed(drawPg2); 
}

function drawPg2() {
  pgNumber = 1;
  
  removeElements();
  background(img);
  tint (250, 250);
  
  textSize(23);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Choose Your Difficulty", 140, 50);

  image(chip1, 80, 60, 125, 125);
  buttons('Easy', 70, 100, drawPg3, 'yellow', false);

  image(chip2, 80, 185, 125, 125);
  buttons('Medium', 70, 225, drawPg3, 'yellow', false);

  image(chip3, 80, 310, 125, 125);
  buttons('Hard', 70, 350, drawPg3, 'yellow', false);


}

function drawPg3() {
  pgNumber = 2;
  
  if (!isCardSliding) {
    removeElements(); 
    background(img);
    tint (250, 250);

    image(card1Label, 0, 440 - dy1, 140, 200);
    image(card2Label, 70, -220 + dy1, 140, 200);
    image(card3Label, 140, 440 - dy1, 140, 200);

    if (dy1 < 230) {
      dy1 += 2; 
    } else {
      isCardSliding = true; 
    }

    let y1 = 440 - dy1 + 65;
    let y2 = -220 + dy1 + 65;
    
   buttons('Flip N Find', -5, y1, drawPg4, 'yellow', false);
   buttons('Memory In Motion', 65, y2, drawPg5,'yellow',false);
   buttons('Color Match', 135, y1, drawPg6, 'yellow', false);
  }
  
}

function drawPg4() {
  pgNumber = 3;
  removeElements();
  background(flipNfindIMG, 255);
  fill('blue');
  square(100, 100, 100); // Placeholder
  buttons('Exit', 160, 380, drawPg2, 'white', true);
}

function drawPg5() {
  pgNumber = 4;
  removeElements();
  background(memInMotionIMG, 255);
  fill('yellow');
  square(100, 100, 100); // Placeholder
  buttons('Exit', 160, 380, drawPg2, 'white', true);
}

function drawPg6() {
  pgNumber = 5;
  removeElements();
  background(colorMatchIMG, 255);
  fill('red');
  square(100, 100, 100); // Placeholder
  buttons('Exit', 160, 380, drawPg2, 'white', true);
}

function buttons(txt, x, y, pgNum, col, exit) {
  let button = createButton(txt);
  button.position(x, y);
  button.size(150, 50); 
  button.style('border', 'none');
  button.style('background-color', 'transparent');
  button.style('color', col);
  button.style('font-weight', 'bold');
  button.style('font-size', '20px');
  button.style("font-family", "Rockwell");
  button.mousePressed(pgNum);
  
  if (exit) {
    dy1 = 0;
    isCardSliding = false;
  } 
}