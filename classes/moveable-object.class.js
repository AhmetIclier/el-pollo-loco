class MoveableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    groundPos = 150;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }

    /**
     * function to build gravity. grows with every loop
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 35);
    }

    /**
     * checks if object is above ground
     * @returns true or false
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < this.groundPos;
        }
    }

    /**
     * checks if there is a collision between 2 or more objects
     * @param {Object} mo - moveable Object
     * @returns condition
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * lowers the "life" of object
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * hit by endboss reduces life double as much as "normal" hit()
     */
    hitByEndboss() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * function to prevent too spammy plays
     * @returns bool
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Time difference in ms
        timepassed = timepassed / 1000; //Time difference in s
        return timepassed < 1; //bedeutet: timepassed <5 ist true.
    }

    /**
     * status of dead object (char, chick, boss)
     * @returns energy zero
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * animates the images in endless loop with modulo operator
     * @param {Array} images - of moveable object
     */
    playAnimation(images) {
            let i = this.currentImage % images.length;
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
    }

    /**
     * moves object to the right on canvas
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * moves object to the left on canvas
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * defines jumping max height
     */
    jump() {
        if(!soundMuted) {
            this.jump_sound.volume = 1;
            this.jump_sound.play();
        } else {
            this.jump_sound.volume = 1;
            
        }
        
        this.speedY = 30;
    }
}