class MoveableObject {
    x = 100;
    y = 300;
    img;
    height = 150;
    width = 100;

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