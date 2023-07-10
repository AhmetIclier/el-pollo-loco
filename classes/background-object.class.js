class Background extends MoveableObject {
    width = 720;
    height;
    y = 80;
    x = 0
    constructor(imagePath, dh, y) {
        super().loadImage(imagePath);
        this.height = dh;
        this.y = y;
    }
}