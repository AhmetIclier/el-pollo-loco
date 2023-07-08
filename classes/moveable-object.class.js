class MoveableObject {
    x = 120;
    y = 400;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(){
        //code to move right e.g.: x += 10;
    };

    moveLeft(){

    };
}