

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


  

  this.setupLevel();

}
function setupLevel() {
  currentConfig    = levelConfigs[env.currentLevel++];
  
  // #2
  ball              = new BallController();

  // #3
  level             = new LevelController();
  

  paddle            = new PaddleController();
  drawController    = new DrawController();
  env.isPaused      = true;
}
/**
 * MAIN GAME LOOP
 * 
 * This function is called over and over
 */
function updateGame() {
  if (drawController) {

    //update all controllers
    paddle.update();
    ball.update();
    level.update();

    // ALWAYS DRAW LAST
    drawController.update();

    // DRAW A NEW LEVEL
    doNewLevelSetupIfAppropriate();

    // UNPAUSE
    doUnPauseIfAppropriate();

  }
}

function doNewLevelSetupIfAppropriate() {
  if (level.wall.allBricks.length === 0) {
    this.setupLevel();
  }
}
function doUnPauseIfAppropriate() {
    // console.log(mouseIsPressed, 'mouseIsPressed');
    if (mouseIsPressed) {
      env.isPaused = false;
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
    bricksPerRow    : 2,
    rowCount        : 1,

    brickGap        : 0,
    wallGap         : 0,
    rowGap          : 0,
    ballVelocityY   : 2,
  },
  {
    title           : 'You aint gettn outta this one',
    bricksPerRow    : 2,
    rowCount        : 2,

    brickGap        : 0,
    wallGap         : 0,
    rowGap          : 0,
    ballVelocityY   : 4,
  },
];

let levelConfigsHOLD = [
  {
    title           : 'Easy',
    bricksPerRow    : 5,
    rowCount        : 2,

    brickGap        : 0,
    wallGap         : 0,
    rowGap          : 0,
    ballVelocityY   : 2,
  },
  {
    title           : 'You aint gettn outta this one',
    bricksPerRow    : 5,
    rowCount        : 4,

    brickGap        : 0,
    wallGap         : 0,
    rowGap          : 0,
    ballVelocityY   : 4,
  },
  {
    title           : 'You aint aint gettn outta this one',
    bricksPerRow    : 5,
    rowCount        : 5,

    brickGap        : 0,
    wallGap         : 0,
    rowGap          : 0,
    ballVelocityY   : 5,
  },
  {
    title           : 'You aint aint aint gettn outta this one',
    bricksPerRow    : 7,
    rowCount        : 4,

    brickGap        : 0,
    wallGap         : 0,
    rowGap          : 0,
    ballVelocityY   : 6,
  },
  {
    title           : 'You aint aint aint aint gettn outta this one',
    bricksPerRow    : 24,
    rowCount        : 2,

    brickGap        : 0,
    wallGap         : 0,
    rowGap          : 0,
    ballVelocityY   : 6,
  },
  {
    title           : 'You aint aint aint gettn outta this one',
    bricksPerRow    : 22,
    rowCount        : 4,

    brickGap        : 0,
    wallGap         : 0,
    rowGap          : 0,
    ballVelocityY   : 8,
  }
];


