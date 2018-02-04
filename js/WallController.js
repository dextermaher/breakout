class WallController {
    constructor(topBound, wallHeight) {
        // create our model
         
        this.allBricks               = [];
        this.brickWidth              = (env.width - 2) / currentConfig.bricksPerRow; // -2 for box borders to show
        this.brickHeight             = Math.min(wallHeight / currentConfig.rowCount, env.maxBrickHeight);
  
        for (let r = 0; r < currentConfig.rowCount; r++) {
            for (let c = 0; c < currentConfig.bricksPerRow; c++) {
                let brickX              = this.brickWidth * c;
                let brickY              = this.brickHeight * r + topBound; 
                let brickPoints         = 3;                                    // todo : need points            
                this.allBricks.push(new Brick(brickX, brickY, this.brickWidth, this.brickHeight, brickPoints));
            }     
        }
    }
    update() {
        // look at all bricks
        for (let i = 0; i < this.allBricks.length; i++) {

            // test if ball is on brick
            if (this._isAHit(this.allBricks[i])) {
                this._handleAHit(i);
                env.bricksDestroyed ++;                
                continue;
            }
        }
    }

    /**
     * INTERNALS
     */
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