class Endboss extends MoveableObject{
    height = 280;
    width = 200;
    x = 1300;
    y = 200;

    BOSS_WALKING = [
        '../img/4_enemie_boss_chicken/1_walk/G1.png',
        '../img/4_enemie_boss_chicken/1_walk/G2.png',
        '../img/4_enemie_boss_chicken/1_walk/G3.png',
        '../img/4_enemie_boss_chicken/1_walk/G4.png',
        '../img/4_enemie_boss_chicken/2_alert/G5.png',
        '../img/4_enemie_boss_chicken/2_alert/G6.png',
        '../img/4_enemie_boss_chicken/2_alert/G7.png',
        '../img/4_enemie_boss_chicken/2_alert/G8.png',
        '../img/4_enemie_boss_chicken/2_alert/G9.png',
        '../img/4_enemie_boss_chicken/2_alert/G10.png',
        '../img/4_enemie_boss_chicken/2_alert/G11.png',
        '../img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    // BOSS_ANGRY = [
    //     '../img/4_enemie_boss_chicken/1_walk/G5.png',
    //     '../img/4_enemie_boss_chicken/1_walk/G6.png',
    //     '../img/4_enemie_boss_chicken/1_walk/G7.png',
    //     '../img/4_enemie_boss_chicken/1_walk/G8.png',
    //     '../img/4_enemie_boss_chicken/2_alert/G9.png',
    //     '../img/4_enemie_boss_chicken/2_alert/G10.png',
    //     '../img/4_enemie_boss_chicken/2_alert/G11.png',
    //     '../img/4_enemie_boss_chicken/2_alert/G12.png'
    // ];

    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.BOSS_WALKING);
        // this.loadImages(this.BOSS_ANGRY);
        this.animate();
        this.speed =  0.15 + Math.random() * 0.5;
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.BOSS_WALKING.length;
            // durch modulo wird eine endlosschleife an zahlen von 0-5 erzeugt
            let path = this.BOSS_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 150);
    }
    
}