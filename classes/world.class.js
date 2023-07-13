class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    clouds = [
        new Cloud(),
    ]

    background = [
        new Background('img/5_background/layers/air.png', 480, 0),
        new Background('img/5_background/layers/3_third_layer/1.png', 400, 80),
        new Background('img/5_background/layers/2_second_layer/2.png', 400, 80),
        new Background('img/5_background/layers/1_first_layer/1.png', 400, 80)
    ]

    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.background);
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);
        
        
        // draw wird immer wieder aufgerufen
        self = this;
        requestAnimationFrame( () => {
            self.draw()
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
            
        }
    }
}