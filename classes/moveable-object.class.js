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

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60)
    }

    playAnimation(IMAGES_WALKING) {
        let i = this.currentImage % IMAGES_WALKING.length;
        let path = IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}