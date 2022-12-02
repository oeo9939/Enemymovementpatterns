/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];

const enemyImage = new Image();
enemyImage.src = "/assets/enemy1.png";
let gameFrame = 0;

// enemy1 = {
//     x: 10,
//     y: 50,
//     width: 100,
//     height: 100,
// }

class Enemy {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.frame = 0;
        this.flapSpeed = Math.random() * 3 + 1;
    }
    update() {
        this.x += this.speed;
        this.y += this.speed;
        // animate sprites of enemyImage
        if (gameFrame % 2 === 0 || this.flapSpeed < 2) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(enemyImage, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

// const enemy1 = new Enemy();
// const enemy2 = new Enemy();

for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
};

// console.log(enemiesArray);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // endsless animation loop
    // enemy1.update();
    // enemy1.draw();
    // enemy1.y++;
    // enemy2.x+=0.5;
    // enemy2.y+=0.5;
    enemiesArray.forEach((enemy) => {
        enemy.update();
        enemy.draw();
    });

    gameFrame++;
    // ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    // ctx.fillRect(enemy2.x, enemy2.y, enemy2.width, enemy2.height);

    requestAnimationFrame(animate);
}

animate();