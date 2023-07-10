class Background extends MoveableObject {
    width = 720;
    y = 330;
    x = 0
    constructor(imagePath) {
        super().loadImage(imagePath);
    }
}