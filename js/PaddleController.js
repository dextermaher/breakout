class PaddleController {
    constructor() {
        // create our model
        this.x          = mouseX;
        this.y          = env.height - 50;
        this.width      = env.paddleWidth;
        this.height     = env.paddleHeight;

        // for convenience
        this.top        = 0;
        this.left       = 0;
        this.bottom     = 0;
        this.right      = 0;

    }
    update() {
        this.x          = mouseX;

        this.top        = this.y;
        this.left       = this.x;
        this.bottom     = this.y + this.height;
        this.right      = this.x + this.width;
    }
}