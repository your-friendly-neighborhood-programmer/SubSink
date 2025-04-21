const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = ctx.canvas.width = 800;
const height = ctx.canvas.height = 600;

class GameObject {
    constructor(name, src, frameWidth, frameHeight, nFrames, canvasPositionX, canvasPositionY, timePerFrame, scale) {
        
        // given parameters
        this.name = name;
        this.src = src;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.nFrames = nFrames;
        this.canvasPositionX = canvasPositionX;
        this.canvasPositionY = canvasPositionY;
        this.timePerFrame = timePerFrame;
        this.scale = scale;

        // deriving image from given src
        this.sprite = new Image();
        this.sprite.src = this.src;

        // predetermined for animation
        this.frameCounter = 0;
        this.currentFrame = 0;
        this.shift = 0;
    }
    draw() {
        ctx.drawImage(this.sprite, this.shift, 0, this.frameWidth, this.frameHeight, this.canvasPositionX, this.canvasPositionY, this.frameWidth * this.scale, this.frameHeight * this.scale);
    }
}

class Player extends GameObject {
    constructor(name, src, frameWidth, frameHeight, nFrames, canvasPositionX, canvasPositionY, timePerFrame, scale) {
        super(name, src, frameWidth, frameHeight, nFrames, canvasPositionX, canvasPositionY, timePerFrame, scale);
        this.speed = 0;
    }
    move(newSpeed) {
        this.speed = newSpeed;
        this.canvasPositionX += this.speed;
        if (this.canvasPositionX <= 0) {
            this.canvasPositionX = 0;
        } else if (this.canvasPositionX + this.frameWidth * this.scale > width) {
            this.canvasPositionX = width - this.frameWidth * this.scale;
        }
    }
}

class Sub extends GameObject {
    constructor(name, src, frameWidth, frameHeight, nFrames, canvasPositionX, canvasPositionY, timePerFrame, scale) {
        super(name, src, frameWidth, frameHeight, nFrames, canvasPositionX, canvasPositionY, timePerFrame, scale);
        this.direction = this.setDirection();
        this.speed = (Math.random() * 2) + 1;
        this.canvasPositionX = this.direction === 'right' ? -this.frameWidth : canvas.width;
        this.canvasPositionY = (Math.random() * 300) + 150;
    }
    draw() {
        ctx.save();
        ctx.translate(this.canvasPositionX + (this.frameWidth * this.scale) / 2, this.canvasPositionY + (this.frameHeight * this.scale) / 2);
        this.direction === 'right' ? ctx.scale(-1, 1) : ctx.scale(1, 1);
        ctx.drawImage(this.sprite, this.shift, 0, this.frameWidth, this.frameHeight, -(this.frameWidth * this.scale) / 2, -(this.frameHeight * this.scale) / 2, this.frameWidth * this.scale, this.frameHeight * this.scale);
        ctx.restore();
        this.move();
    }
    setDirection() {
        let direction = Math.floor(Math.random() * 2) === 0 ? 'right' : 'left';
        return direction;
    }
    move() {
        this.canvasPositionX += this.direction === 'right' ? this.speed : -this.speed;
        if (this.canvasPositionX >= canvas.width - (this.frameWidth * this.scale)) {
            this.direction = 'left';
        } else if (this.canvasPositionX <= 0) {
            this.direction = 'right';
        }
    }
}

// creating static cloud objects
const clouds = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 0, 0, 100, 2);
const clouds2 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 70, 0, 100, 2);
const clouds3 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 150, 0, 100, 2);
const clouds4 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 270, 0, 100, 2);
const clouds5 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 400, 0, 100, 2);
const clouds6 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 500, 0, 100, 2);
const clouds7 = new GameObject('sky', './assets/clouds.png', 128, 16, 1, 600, 0, 100, 2);
const cloudsArray = [clouds, clouds2, clouds3, clouds4, clouds5, clouds6, clouds7];
// creating static ocean objects
const ocean = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 0, 100, 100, 1);
const ocean2 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 128, 100, 100, 1);
const ocean3 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 256, 100, 100, 1);
const ocean4 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 384, 100, 100, 1);
const ocean5 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 512, 100, 100, 1);
const ocean6 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 640, 100, 100, 1);
const ocean7 = new GameObject('ocean', './assets/ocean.png', 128, 16, 1, 768, 100, 100, 1);
const oceanArray = [ocean, ocean2, ocean3, ocean4, ocean5, ocean6, ocean7];
// creating static rock objects
const rock1 = new GameObject('rock1', './assets/rock1.png', 160, 111, 1, -10, 545, 100, .5);
const rock2 = new GameObject('rock2', './assets/rock2.png', 147, 115, 1, 46, 545, 100, .5);
const rock3 = new GameObject('rock3', './assets/rock3.png', 173, 103, 1, 102, 550, 100, .5);
const rock4 = new GameObject('rock4', './assets/rock4.png', 166, 67, 1, 158, 570, 100, .5);
const rock5 = new GameObject('rock5', './assets/rock5.png', 174, 92, 1, 214, 555, 100, .5);
const rock6 = new GameObject('rock6', './assets/rock1.png', 160, 111, 1, 270, 545, 100, .5);
const rock7 = new GameObject('rock7', './assets/rock2.png', 147, 115, 1, 326, 545, 100, .5);
const rock8 = new GameObject('rock8', './assets/rock3.png', 173, 103, 1, 382, 550, 100, .5);
const rock9 = new GameObject('rock9', './assets/rock4.png', 166, 67, 1, 438, 570, 100, .5);
const rock10 = new GameObject('rock10', './assets/rock5.png', 174, 92, 1, 494, 555, 100, .5);
const rock11 = new GameObject('rock11', './assets/rock1.png', 160, 111, 1, 550, 545, 100, .5);
const rock12 = new GameObject('rock12', './assets/rock2.png', 147, 115, 1, 606, 545, 100, .5);
const rock13 = new GameObject('rock13', './assets/rock3.png', 173, 103, 1, 662, 550, 100, .5);
const rock14 = new GameObject('rock14', './assets/rock4.png', 166, 67, 1, 718, 570, 100, .5);
const rock15 = new GameObject('rock15', './assets/rock5.png', 174, 92, 1, 774, 555, 100, .5);
const rockArray = [rock1, rock2, rock3, rock4, rock5, rock6, rock7, rock8, rock9, rock10, rock11, rock12, rock13, rock14, rock15];

// creating player object (battleship)
let player = new Player('battleship', './assets/battleship.png', 185, 94, 1, (width/2)-(185*.4)/2, 66, 100, .4);

// creating enemies (subs)
let blackSub = new Sub('blackSub', './assets/blackSub.png', 165, 47, 1, 100, 320, 100, .4);
let greySub = new Sub('greySub', './assets/greySub.png', 165, 47, 1, 600, 350, 100, .4);

// creating weapons
// let depthBomb = new GameObject('depthBomb', './assets/depthBomb.png', 200, 200, 1, null, null, 100, 0);
// let greyMine = new GameObject('greyMine', './assets/greyMine.png', 200, 200, 1, null, null, 100, 0);
// let blackMine = new GameObject('blackMine', './assets/blackMine.png', 200, 200, 1, null, null, 100, .5);

// // creating effects for explosion
// let explosion = new GameObject('explosion', './assets/explosion.png', 200, 200, 5, null, null, 100, 0);

function renderScene() {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, width, 180);
    ctx.fillStyle = '#218099';
    ctx.fillRect(0, 100, width, height);
    oceanArray.forEach(ocean => {
        ocean.draw();
    });
    cloudsArray.forEach(cloud => {
        cloud.draw();
    });
    rockArray.forEach(rock => {
        rock.draw();
    });
    player.draw();
    blackSub.draw();
    greySub.draw();
}

function gameLoop() {
    renderScene();
    requestAnimationFrame(gameLoop);
    document.addEventListener('keydown', (e) => {
        e.key === 'ArrowLeft' || e.key === 'a' ? player.move(-.1) : e.key === 'ArrowRight' || e.key === 'd' ? player.move(.1) : null;
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
            e.preventDefault();
            // draw depthbomb 
        }
    });
}
gameLoop();