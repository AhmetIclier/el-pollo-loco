class Level {
    enemies;
    clouds;
    background;
    levelEndX = 1438;

    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.background = backgroundObjects;
    }
}