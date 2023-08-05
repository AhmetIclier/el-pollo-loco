class MoveableObject extends DrawableObject {
    speed = 0.25;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
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
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 220;
        }
    }



    

    isColliding (mo) {
        return  this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x && 
            this.y < mo.y + mo.height
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt () {
        let timePassed = new Date().getTime() - this.lastHit
        timePassed = timePassed / 1000;
        return timePassed < 0.3;
    }

    isDead() {
        return this.energy <= 0;
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