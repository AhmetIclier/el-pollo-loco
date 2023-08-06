const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Cloud(300),
        new Cloud(600),
        new Cloud(1200),
        new Cloud(1800)
    ],
    [
        new Background('img/5_background/layers/air.png', 480, 0, -719),
        new Background('img/5_background/layers/3_third_layer/2.png', 400, 80, -719),
        new Background('img/5_background/layers/2_second_layer/2.png', 400, 80, -719),
        new Background('img/5_background/layers/1_first_layer/2.png', 400, 80, -719),
        new Background('img/5_background/layers/air.png', 480, 0, 0),
        new Background('img/5_background/layers/3_third_layer/1.png', 400, 80, 0),
        new Background('img/5_background/layers/2_second_layer/1.png', 400, 80, 0),
        new Background('img/5_background/layers/1_first_layer/1.png', 400, 80, 0),
        new Background('img/5_background/layers/air.png', 480, 0, 719),
        new Background('img/5_background/layers/3_third_layer/2.png', 400, 80, 719),
        new Background('img/5_background/layers/2_second_layer/2.png', 400, 80, 719),
        new Background('img/5_background/layers/1_first_layer/2.png', 400, 80, 719),
        new Background('img/5_background/layers/air.png', 480, 0, 1438),
        new Background('img/5_background/layers/3_third_layer/1.png', 400, 80, 1438),
        new Background('img/5_background/layers/2_second_layer/1.png', 400, 80, 1438),
        new Background('img/5_background/layers/1_first_layer/1.png', 400, 80, 1438)
    ],
    [
        new SalsaBottle(50),
        new SalsaBottle(50),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle()
    ],
    [
        new Coins(50),
        new Coins(50),
        new Coins(100),
        new Coins(100),
        new Coins(150),
        new Coins(150),
        new Coins(200),
        new Coins(200),
        new Coins(250),
        new Coins(250)
    ]
);