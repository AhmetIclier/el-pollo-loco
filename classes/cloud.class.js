class Cloud extends MoveableObject {

    y = 20;
    width = 500;
    height = 250;

    constructor(x) {
        super().loadImage('./img/5_background/layers/4_clouds/1.png');

        this.x = x + Math.random() * 150; // Zahl zwischen 200 und 700 
        this.animate();
    }

    /**
     * animates clouds through calling moveLeft function
     */
    animate() {
        this.moveLeft();
    }

    /**
     * makes clouds move left slowly
     */
    moveLeft() {
        setInterval(() => this.x -= this.speed, 1000 / 60);

    }
}