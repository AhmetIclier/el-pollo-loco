class Character extends MoveableObject {

    height = 280;
    width = 150;
    y = 80;
    speed = 4;
    time = 0;

    offset = {
        top: 120,
        bottom: 20,
        left: 40,
        right: 30
    }

    /**
     * following arrays in CAPSLOCK are different animation images
     */
    IMAGES_WALKING = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'
    ];
    
    IMAGES_JUMPING = [
        './img/2_character_pepe/3_jump/J-31.png',
        './img/2_character_pepe/3_jump/J-32.png',
        './img/2_character_pepe/3_jump/J-33.png',
        './img/2_character_pepe/3_jump/J-34.png',
        './img/2_character_pepe/3_jump/J-35.png',
        './img/2_character_pepe/3_jump/J-36.png',
        './img/2_character_pepe/3_jump/J-37.png',
        './img/2_character_pepe/3_jump/J-38.png',
        './img/2_character_pepe/3_jump/J-39.png',
    ];

    IMAGES_HURT = [
        './img/2_character_pepe/4_hurt/H-41.png',
        './img/2_character_pepe/4_hurt/H-42.png',
    ];

    IMAGES_DEAD = [
        './img/2_character_pepe/5_dead/D-51.png',
        './img/2_character_pepe/5_dead/D-52.png',
        './img/2_character_pepe/5_dead/D-53.png',
        './img/2_character_pepe/5_dead/D-54.png',
        './img/2_character_pepe/5_dead/D-55.png',
        './img/2_character_pepe/5_dead/D-56.png',
        './img/2_character_pepe/5_dead/D-57.png',
    ];

    IMAGES_IDLE = [
        './img/2_character_pepe/1_idle/idle/I-1.png',
        './img/2_character_pepe/1_idle/idle/I-2.png',
        './img/2_character_pepe/1_idle/idle/I-3.png',
        './img/2_character_pepe/1_idle/idle/I-4.png',
        './img/2_character_pepe/1_idle/idle/I-5.png',
        './img/2_character_pepe/1_idle/idle/I-6.png',
        './img/2_character_pepe/1_idle/idle/I-7.png',
        './img/2_character_pepe/1_idle/idle/I-8.png',
        './img/2_character_pepe/1_idle/idle/I-9.png',
        './img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    IMAGES_LONG_IDLE = [
        './img/2_character_pepe/1_idle/long_idle/I-11.png',
        './img/2_character_pepe/1_idle/long_idle/I-12.png',
        './img/2_character_pepe/1_idle/long_idle/I-13.png',
        './img/2_character_pepe/1_idle/long_idle/I-14.png',
        './img/2_character_pepe/1_idle/long_idle/I-15.png',
        './img/2_character_pepe/1_idle/long_idle/I-16.png',
        './img/2_character_pepe/1_idle/long_idle/I-17.png',
        './img/2_character_pepe/1_idle/long_idle/I-18.png',
        './img/2_character_pepe/1_idle/long_idle/I-19.png',
        './img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];

    world;

    /**
     * Soundcollection of character Pepe
     */
    walking_sound = new Audio('audio/walking.mp3');
    dead_sound = new Audio('audio/dead.mp3');
    snore_sound = new Audio('audio/snore.mp3');
    jump_sound = new Audio('./audio/jump.mp3');
    
    /**
     * calling super() to load functions from movaeable object and start animating 
     */
    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.applyGravity();
        this.animate();
    }

    /**
     * controls animation speed
     */
    animate() {
        setStoppableInterval(() => this.moveCharacter(), 1000 / 60);
        setStoppableInterval(() => this.playCharacter(), 80);
    }

    /**
     * moves character to left, right, and jump and cam moves linear to pepe
     */
    moveCharacter() {
        this.world.camera_x = -this.x + 100;
        this.walking_sound.playbackRate = 2.5;
        this.walking_sound.pause();
        if (this.canMoveRight()) {
            this.moveRight();
        }
        if (this.canMoveLeft()) {
            this.moveLeft();
        }
        if (this.canJump()) {
            this.jump_sound.play();
            this.jump();
        }
    }

    /**
     * function to check of pepe can move left
     * @returns true or false
     */
    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }

    /**
     * calls moveRight method from moveable objects to make play walking_sound move on x-axis
     */
    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        if (!this.isAboveGround()) {
            this.walking_sound.play();
        }
    }

    /**
     * function to check of pepe can move left
     * @returns true or false
     */
    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0
    }

    /**
     * calls moveLeft method from moveable objects to make play walking_sound move on x-axis
     */
    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        if (!this.isAboveGround()) {
            this.walking_sound.play();
        }
    }
    
    /**
     * function to create a ingame gravity. speed grows(reverted) with time
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30);
    }

    /**
     * function to call smooth jumping animation
     */
    jumpRoutine() {
        this.smoothJump();
        this.playAnimation(this.IMAGES_JUMPING);
        this.time = 0;
    }

    /**
     * checks if character is in the air (jumping) or not
     * @returns true or false
     */
    canJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround();
    }
    
    /**
     * generating a smooth jump animation with timeouts matching to the current image
     */
    smoothJump(){
        setTimeout(() => {
            this.currentImage = 2;
        }, 300);

        setTimeout(() => {
            this.currentImage = 3;
        }, 300);

        setTimeout(() => {
            this.currentImage = 4;
        }, 300);

        setTimeout(() => {
            this.currentImage = 5;
        }, 300);

        setTimeout(() => {
            this.currentImage = 6;
        }, 100);
    }

    /**
     * function to call different stages of character actions. long AFK, energy zero, hit by opp etc.
     */
    playCharacter() {
        if (this.isDead()) {
            this.deathRoutine();
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.jumpRoutine();
        } else if (this.canWalk()) {
            this.walkingRoutine();
        } else if (this.checkIdleLength()) {
            this.shortIdleRoutine();
        } else {
            this.longIdleRoutine();
        }
    }

    /**
     * function is called when Pepe dies (dead-animation of pepe)
     */
    deathRoutine() {
        this.playAnimation(this.IMAGES_DEAD);
        this.dead_sound.play();
        this.world.endboss.endboss_coming.volume = 0;
        this.characterFalling();
        stopGame();
        this.showDeadScreen();
    }


    /**
     * bool to check if right or left arrowkey is pressed
     * @returns true or false
     */
    canWalk() {
        return this.world.keyboard.RIGHT ||
            this.world.keyboard.LEFT
    }

    /**
     * function to animate basic walking
     */
    walkingRoutine() {
        this.playAnimation(this.IMAGES_WALKING);
        this.time = 0;
        this.snore_sound.pause();
    }

    /**
     * 
     * @returns number to call idle routines if needed
     */
    checkIdleLength() {
        return this.time < 95;
    }

    /**
     * function to animate short AFK animation
     */
    shortIdleRoutine() {
        this.playAnimation(this.IMAGES_IDLE);
        this.time++;
        this.snore_sound.pause();
    }

    /**
     * plays snore sound if AFK too long
     */
    longIdleRoutine() {
        this.playAnimation(this.IMAGES_LONG_IDLE);
        this.snore_sound.play();
    }

    /**
     * function to make pepe disappear after deatch on y-axis
     */
    characterFalling() {
        setInterval(() => this.y++, 50);
    }

    /**
     * shows menu after game over
     */
    showDeadScreen() {
        document.getElementById('deadScreen').classList.remove('d-none');
        this.world.bg_music.pause();
    }
}