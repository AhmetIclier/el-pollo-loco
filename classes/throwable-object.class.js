class ThrowableObject extends MoveableObject {

    speedX = 10;

    // Bilder
    IMAGES = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    IMAGES_SPLASH = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]

    constructor(x, y) {
        super().loadImage('./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw(x, y);
        this.animate();
    }



    /**
     * controls the coordinates of thrown object
     * @param {number} x - coordinate
     * @param {number} y - coordinate
     */
    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        world.throw_sound.play();
    }

    /**
     * animating the thrown object
     */
    animate() {
        this.splash = setInterval(() => {
            if (this.y > 350 || world.collidesWithEndboss) {
                this.playCollisionAnimation();
            } else {
                this.playAnimation(this.IMAGES);
                this.x += 5;
            }
        }, 1000 / 60);
        setInterval(() => world.collidesWithEndboss = false, 500);
    }

    /**
     * animation after collision
     */
    playCollisionAnimation() {
        this.playAnimation(this.IMAGES_SPLASH);
        this.speedX = 0;
        world.splash_sound.play();
        clearInterval(this.splash);
    }
}