class Background extends MoveableObject {
    width = 721;
    height;
    y = 80;
    x = 0
    constructor(imagePath, h, y, x) {
        super().loadImage(imagePath);
        this.height = h;
        this.y = y;
        this.x = x;
    }
}