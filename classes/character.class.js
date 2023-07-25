class Character extends MoveableObject {
    
    height = 200;
    y = 100;
    x = 50;
    speed = 5;
    otherDirection;
    

    IMAGES_WALKING = [
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        '../img/2_character_pepe/3_jump/J-31.png',
        '../img/2_character_pepe/3_jump/J-32.png',
        '../img/2_character_pepe/3_jump/J-33.png',
        '../img/2_character_pepe/3_jump/J-34.png',
        '../img/2_character_pepe/3_jump/J-35.png',
        '../img/2_character_pepe/3_jump/J-36.png',
        '../img/2_character_pepe/3_jump/J-37.png',
        '../img/2_character_pepe/3_jump/J-38.png',
        '../img/2_character_pepe/3_jump/J-39.png'
    ];

    world;
    walkSound = new Audio('../audio/walk.mp3');
    jumpSound = new Audio('../audio/jump.mp3')
    
    constructor() {
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walkSound.pause();
            this.walkSound.playbackRate = 2.5;
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.moveRight();
                this.otherDirection = false;
                this.walkSound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0 ) {
                this.moveLeft();
                this.otherDirection = true;
                this.walkSound.play();
            }
            if (this.world.keyboard.UP || this.world.keyboard.SPACE && !this.aboveGround()){
                this.jump();
                this.jumpSound.play();
            }
            this.world.camera_x = -this.x + 50;
        }, 1000/60);

        setInterval(() => {
            if (this.aboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            }else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING)
            }
        }, 150);
    }
    
}

