

// OUR GLOBAL OBJECTS
let paddle;
let drawController;
let ball;
let env;


function main() {
  // do any start-up work you want here
  env               = new Environment();
  paddle            = new PaddleController();
  drawController    = new DrawController();
  ball              = new BallController();
  wall              = new WallController();
}
function updateGame() {
  if (drawController) {

    //update all controllers
    paddle.update();
    ball.update();
    wall.update();

    // ALWAYS DRAW LAST
    drawController.update();
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
