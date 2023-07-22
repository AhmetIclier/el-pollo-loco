class Character extends MoveableObject {
    
    height = 200;
    y = 80;
    x = 50;
    speed = 10;
    otherDirection;
    

    IMAGES_WALKING = [
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png'
    ];

    world;
    walkSound = new Audio('../audio/walk.mp3');
    
    constructor() {
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walkSound.pause();
            this.walkSound.playbackRate = 5.0;
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walkSound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0 ) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walkSound.play();
            }
            this.world.camera_x = -this.x + 50;
        }, 1000/60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                // durch modulo wird eine endlosschleife an zahlen von 0-5 erzeugt
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
            if (this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                // durch modulo wird eine endlosschleife an zahlen von 0-5 erzeugt
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 1000/60);
    }

    jump(){

    };
}