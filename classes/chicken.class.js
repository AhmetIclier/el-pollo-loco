class Chicken extends MoveableObject {
    height = 80;
    width = 40;
    y = 370;

    CHICKS_WALKING = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500;
        this.loadImages(this.CHICKS_WALKING);
        this.animate();
        this.speed =  0.15 + Math.random() * 0.25;
    };

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.CHICKS_WALKING.length;
            // durch modulo wird eine endlosschleife an zahlen von 0-5 erzeugt
            let path = this.CHICKS_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}