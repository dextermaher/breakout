

// OUR GLOBAL OBJECTS
let paddle;
let drawController;
let ball;
let env;
let currentConfig;


function main() {
  env               = new Environment();
  this.setupNewGame();
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

      // reset game if needed
      if(env.lives < 1){
        setupNewGame();
      }

      env.isPaused = false;
    }
}
function setupNewGame(){
  env.lives           = env.startLives;
  env.bricksDestroyed = 0;
  env.currentLevel    = 0;
  this.setupLevel();
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
let levelConfigsHOLD = [
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

let levelConfigs = [
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



function parseInt(num) {
  return ~~num;
}
function isNaN(val) {
  if ( val == undefined || val == null) {
    return true;
  }
  return false;
}
function random(max, min) {
  max             = parseInt(max);
  min             = parseInt(min);

  if (isNaN(max)) {
      max = 10;
  }
  if (isNaN(min)) {
      min = 0;
  }

  if (min > max) {
      var t = min;
      min = max;
      max = t;
  }

  return Math.floor(Math.random() * ((max+1) - min)) + min;
};
