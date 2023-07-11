class Cloud extends MoveableObject {
    height = 250;
    y = 50;
    width = 400;
    

    constructor() {
        super().loadImage('../img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500;
        this.animate();
    };

    animate() {
        this.moveLeft();
    }
}