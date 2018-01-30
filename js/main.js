

// OUR GLOBAL OBJECTS
let paddle;
let drawController;
let ball;
let env;
let currentConfig;


function main() {


  // do any start-up work you want here

  // #1
  env               = new Environment();


  currentConfig    = levelConfigs[env.currentLevel];

  this.setupLevel();

}
function setupLevel() {

  // #2
  ball              = new BallController();

  // #3
  level             = new LevelController();
  

  paddle            = new PaddleController();
  drawController    = new DrawController();
}
function updateGame() {
  if (drawController) {

    //update all controllers
    paddle.update();
    ball.update();
    level.update();

    // ALWAYS DRAW LAST
    drawController.update();

    let mouseHasBeenPressed = false;
    // new level?
    if (level.wall.allBricks.length === 0) {
      this.setupLevel();
      while(mouseHasBeenPressed === false) {
        // ===--===--===--===--===--===--===--===--===--===-- //  
        //                                                   //
        // WRITE onClick COMMAND                            //
        //                                                 //
        // ===--===--===--===--===--===--===--===--===--==//
      }

      
      
    }
  }
}
// do work after PROCESSING has loaded
if (main) window.onload = main;



// ===--===--===--===--===--===--===--===--===--===--
// Using Processing... so for now we just let
// it call the draw function and we redirect it to
// our own drawController's draw()
// ===--===--===--===--===--===--===--===--===--===--
function draw() {
  updateGame();
}


let levelConfigs = [
  {
    title           : 'Easy',
    bricksPerRow    : 10,
    rowCount        : 2,

    brickGap        : 0,
    wallGap         : 0,
    rowGap          : 0,
    ballVelocityY   : 5,
  },
  {
    title           : 'You aint gettn outta this one',
    bricksPerRow    : 15,
    rowCount        : 6,

    brickGap        : 0,
    wallGap         : 0,
    rowGap          : 0,
    ballVelocityY   : 7,
  },
  {
    title           : 'You aint aint gettn outta this one',
    bricksPerRow    : 25,
    rowCount        : 12,

    brickGap        : 0,
    wallGap         : 0,
    rowGap          : 0,
    ballVelocityY   : 1,
  }
];


