class MoveableObject {
    x = 100;
    y = 300;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.25;
    otherDirection = false;

    speedY = 0;
    accelaration = 2.5;

    applyGravity() {
        setInterval(() => {
            if(this.aboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelaration;
            }
        }, 1000/25)
    }
    
    aboveGround() {
        return this.y < 220;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawStroke(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveLeft() {
        this.x -= this.speed;
        
    }

    moveRight() {
        this.x += this.speed;
        
    }

    jump(){
        this.speedY = 30;
    };

    playAnimation(IMAGES_WALKING) {
        let i = this.currentImage % IMAGES_WALKING.length;
        let path = IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}