class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * draws images on canvas
     * @param {HTMLNode} ctx - context of canvas
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * function to load every img from array
     * @param {Array} arr - array with images
     */
    loadImages(arr) {
        arr.forEach(path => {


            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
    
    /**
     * draws stroke around moveable objects, endboss, chicken and throwable objects - shows the hitbox for collisions
     * @param {HTMLNode} ctx  - context of canvas
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - (this.offset.right + this.offset.left), this.height - (this.offset.top + this.offset.bottom));
            ctx.stroke();
        }
    }

    /**
     * function to set percentage of status bars
     * @param {number} percentage  - how much filling for the bar
     */
    // Bild vom jeweiligen Balken
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * takes percentage of bar filling and returns matchins index for array
     * @returns number as index for the array of images
     */
    resolveImageIndex() {
        if (this.percentage == 10) {
            return 5;
        } else if (this.percentage >= 7) {
            return 4;
        } else if (this.percentage >= 5) {
            return 3;
        } else if (this.percentage >= 3) {
            return 2;
        } else if (this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }
}

