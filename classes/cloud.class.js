class Cloud extends MoveableObject {
    height = 250;
    y = 50;
    width = 400;

    constructor() {
        super().loadImage('../img/5_background/layers/4_clouds/1.png');
    
        this.x = 100 + Math.random() * 500;
    };
}