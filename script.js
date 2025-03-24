const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = ctx.canvas.width = 800;
const height = ctx.canvas.height = 500;

class GameObject {
    constructor(name, src, frameWidth, frameHeight, nFrames, canvasPositionX, canvasPositionY, timePerFrame, scale) {
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
        this.scale = scale;
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
        ctx.drawImage(this.sprite, this.shift, 0, this.frameWidth, this.frameHeight, this.canvasPositionX, this.canvasPositionY, this.frameWidth * this.scale, this.frameHeight * this.scale);
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

const battleship = new GameObject('battleship', './assets/battleship.png', 185, 94, 1, (width /2) - (185*.4)/2, 66, 100, .4);
const battleship2 = new GameObject('battleship2', './assets/battleship2.png', 185, 94, 1, (width /2) - (185*.4)/2, 66, 100, .4);
const blackMine = new GameObject('blackMine', './assets/blackMine.png', 200, 200, 1, null, null, 100, .5);
const blackSub = new GameObject('blackSub.png', './assets/blackSub.png', 165, 47, 1, 100, 220, 100, .4);
const blackSub2 = new GameObject('blackSub2.png', './assets/blackSub2.png', 165, 47, 1, 100, 220, 100, .4);
const clouds = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 0, 0, 100, 2);
const clouds2 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 70, 0, 100, 2);
const clouds3 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 150, 0, 100, 2);
const clouds4 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 270, 0, 100, 2);
const clouds5 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 400, 0, 100, 2);
const clouds6 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 500, 0, 100, 2);
const clouds7 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 600, 0, 100, 2);
const depthBomb = new GameObject('depthBomb', './assets/depthBomb.png', 200, 200, 1, null, null, 100, 0);
const explosion = new GameObject('explosion', './assets/explosion.png', 200, 200, 5, null, null, 100, 0);
const greyMine = new GameObject('greyMine', './assets/greyMine.png', 200, 200, 1, null, null, 100, 0);
const greySub = new GameObject('greySub', './assets/greySub.png', 165, 47, 1, 600, 250, 100, .4);
const greySub2 = new GameObject('greySub2', './assets/greySub2.png', 165, 47, 1, 600, 250, 100, .4);
const ocean = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 0, 100, 100, 1);
const ocean2 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 128, 100, 100, 1);
const ocean3 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 256, 100, 100, 1);
const ocean4 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 384, 100, 100, 1);
const ocean5 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 512, 100, 100, 1);
const ocean6 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 640, 100, 100, 1);
const ocean7 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 768, 100, 100, 1);
const rock1 = new GameObject('rock1', './assets/rock1.png', 200, 200, 1, -10, 445, 100, .5);
const rock2 = new GameObject('rock2', './assets/rock2.png', 200, 200, 1, 46, 445, 100, .5);
const rock3 = new GameObject('rock3', './assets/rock3.png', 200, 200, 1, 102, 450, 100, .5);
const rock4 = new GameObject('rock4', './assets/rock4.png', 200, 200, 1, 158, 470, 100, .5);
const rock5 = new GameObject('rock5', './assets/rock5.png', 200, 200, 1, 214, 455, 100, .5);
const rock6 = new GameObject('rock6', './assets/rock1.png', 200, 200, 1, 270, 445, 100, .5);
const rock7 = new GameObject('rock7', './assets/rock2.png', 200, 200, 1, 326, 445, 100, .5);
const rock8 = new GameObject('rock8', './assets/rock3.png', 200, 200, 1, 382, 450, 100, .5);
const rock9 = new GameObject('rock9', './assets/rock4.png', 200, 200, 1, 438, 470, 100, .5);
const rock10 = new GameObject('rock10', './assets/rock5.png', 200, 200, 1, 494, 455, 100, .5);
const rock11 = new GameObject('rock11', './assets/rock1.png', 200, 200, 1, 550, 445, 100, .5);
const rock12 = new GameObject('rock12', './assets/rock2.png', 200, 200, 1, 606, 445, 100, .5);
const rock13 = new GameObject('rock13', './assets/rock3.png', 200, 200, 1, 662, 450, 100, .5);
const rock14 = new GameObject('rock14', './assets/rock4.png', 200, 200, 1, 718, 470, 100, .5);
const rock15 = new GameObject('rock15', './assets/rock5.png', 200, 200, 1, 774, 455, 100, .5);

onload = () => {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, width, 180);
    ctx.fillStyle = '#0f3a4c';
    ctx.fillRect(0, 100, width, height);
    ocean.draw();
    ocean2.draw();
    ocean3.draw();
    ocean4.draw();
    ocean5.draw();
    ocean6.draw();
    ocean7.draw();
    clouds.draw();
    clouds2.draw();
    clouds3.draw();
    clouds4.draw();
    clouds5.draw();
    clouds6.draw();
    clouds7.draw();
    rock1.draw();
    rock2.draw();
    rock3.draw();
    rock4.draw();
    rock5.draw();
    rock6.draw();
    rock7.draw();
    rock8.draw();
    rock9.draw();
    rock10.draw();
    rock11.draw();
    rock12.draw();
    rock13.draw();
    rock14.draw();
    rock15.draw();
    battleship.draw();
    greySub.draw();
    blackSub.draw();
}



