class DrawController {
  constructor(width, height) {
    // create our model
    this.setup();
  }
  setup() {
    createCanvas(env.width, env.height);
  }
  update() {
    this.draw();
  }
  draw() {
    this._clearScreen();
    this._drawPaddle();
    this._drawBall();
    this._drawLevel();
  }
  _clearScreen() {
    background(207, 254, 255);
  }
  _drawPaddle() {
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
  }
  _drawBall() {
    ellipse(ball.x, ball.y, ball.radius, ball.radius);
  }

  _drawLevel() {
    let aBrick;
    for (let i = 0; i < level.wall.allBricks.length; i++) {
      aBrick = level.wall.allBricks[i];
      rect(aBrick.x, aBrick.y, aBrick.width, aBrick.height, aBrick.points);
    }
  }
  
}