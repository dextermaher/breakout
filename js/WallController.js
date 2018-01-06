class WallController {
    constructor() {
        // create our model
        this.allBricks      = [];

        let brickWidth = 40;
        let brickHeight = 20;
        

        for (let i = 0; i < 8; i++) {
            this.allBricks.push(new Brick(30 * i, 150, env.brickWidth, env.brickHeight, 3));            
        }

    }
    update() {
        // look at all bricks
        for (let i = 0; i < wall.allBricks.length; i++) {

            // test if ball is on brick
            if (this._isAHit(wall.allBricks[i])) {
                this._handleAHit(i);
                continue;
            }
        }
    }

    _isAHit(brick){

          // ball y inside brick
          if (ball.y >= brick.y && ball.y <= brick.y + brick.height) {
            // so y passed, does x hit?
            if (ball.x >= brick.x && ball.x <= brick.x + brick.width) {
                return true;
            }
        }

        return false;
    }
    _handleAHit(brickIndex) {                
        // remove brick from array
        this.allBricks.splice(brickIndex, 1);

        ball.flipVelocityY();
    }


}