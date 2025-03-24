const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = ctx.canvas.width = window.innerWidth -50;
const height = ctx.canvas.height = window.innerHeight - 150;

class GameObject {
    constructor(name, src, frameWidth, frameHeight, nFrames, canvasPositionX, canvasPositionY, timePerFrame) {
        this.name = name;
        this.src = src;
        this.sprite = new Image();
        this.sprite.src = this.src;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.totalFrames = this.totalFrames;
        this.canvasPositionX = canvasPositionX;
        this.canvasPositionY = canvasPositionY;
        this.homeX = canvasPositionX;
        this.homeY = canvasPositionY;
        this.nFrames = nFrames;
        this.timePerFrame = timePerFrame;
        this.frameCounter = 0;
        this.currentFrame = 0;
        this.shift = 0;
    }
    update(deltaTime) {
        this.frameCounter += deltaTime;
        if (this.frameCounter >= this.timePerFrame) {
            this.frameCounter = 0;
            this.currentFrame++;
        }
        if (this.currentFrame >= this.nFrames) {
            this.currentFrame = 0;
        }
        this.shift = this.currentFrame * this.frameWidth;
    }
    draw() {
        ctx.drawImage(this.sprite, 0, this.shift, this.frameWidth, this.frameHeight, this.canvasPositionX, this.canvasPositionY, this.frameWidth, this.frameHeight);
    }
    right() {
        return (this.canvasPositionX + this.frameWidth);
    }
    left() {
        return (this.canvasPositionX);
    }
    bottom() {
        return (this.canvasPositionY + this.frameHeight);
    }
    top() {
        return (this.canvasPositionY);
    }
    collidingWith(other) {
        if (this.right() >= other.left() && this.left() <= other.right() && this.bottom() >= other.top()) {
            return true;
        } else if (this.left() <= other.right() && this.right() >= other.left() && this.top() <= other.bottom()) {
            return true;
        } return false;
    }
    reset() {
        this.canvasPositionX = this.homeX;
        this.canvasPositionY = this.homeY;
        this.frameCounter = 0;
        this.currentFrame = 0;
        this.shift = 0;
    }
}

const battleship = new GameObject('battleship', './assets/battleship.png', 200, 200, 1, (width / 2) - 100, (height / 2) -100, 100);
const blackMine = new GameObject('blackMine', './assets/blackMine.png', 200, 200, 1, null, null, 100);
const blackSub = new GameObject('blackSub.png', './assets/blackSub.png', 200, 200, 1, null, null, 100);
const clouds = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 0, 0, 100);
const depthBomb = new GameObject('depthBomb', './assets/depthBomb.png', 200, 200, 1, null, null, 100);
const explosion = new GameObject('explosion', './assets/explosion.png', 200, 200, 5, null, null, 100);
const greyMine = new GameObject('greyMine', './assets/greyMine.png', 200, 200, 1, null, null, 100);
const greySub = new GameObject('greySub', './assets/greySub.png', 200, 200, 1, null, null, 100);
const ocean = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 0, height / 2, 100);
const rock1 = new GameObject('rock1', './assets/rock1.png', 200, 200, 1, 0, height - 200, 100);
const rock2 = new GameObject('rock2', './assets/rock2.png', 200, 200, 1, 200, height - 200, 100);
const rock3 = new GameObject('rock3', './assets/rock3.png', 200, 200, 1, 400, height - 200, 100);
const rock4 = new GameObject('rock4', './assets/rock4.png', 200, 200, 1, 600, height - 200, 100);
const rock5 = new GameObject('rock5', './assets/rock5.png', 200, 200, 1, 800, height - 200, 100);

rock1.draw();
rock2.draw();
rock3.draw();
rock4.draw();
rock5.draw();



