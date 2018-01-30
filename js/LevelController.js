class LevelController {
    constructor() {

        // create our model
        this.topBound                = ball.height * 3;
        this.wallHeight              = ball.height * 10;
        this.bottomBound             = this.wallHeight + this.topBound;
        this.wall                    = new WallController(this.topBound, this.wallHeight);
    }
    update() {
        this.wall.update();
    }
}