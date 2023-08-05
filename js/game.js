let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('keydown', (event) => {
    console.log(event);

    switch (event.code) {
        case 'ArrowUp':
            keyboard.UP = true;
            break;
        case 'ArrowLeft':
            keyboard.LEFT = true;
            break;
        case 'ArrowRight':
            keyboard.RIGHT = true;
            break;
        case 'ArrowDown':
            keyboard.DOWN = true;
            break;
        case 'Space':
            keyboard.SPACE = true;
            break;
        case 'KeyD':
        keyboard.D = true;
        break;
    }
})

window.addEventListener('keyup', (event) => {
    console.log(event);

    switch (event.code) {
        case 'ArrowUp':
            keyboard.UP = false;
            break;
        case 'ArrowLeft':
            keyboard.LEFT = false;
            break;
        case 'ArrowRight':
            keyboard.RIGHT = false;
            break;
        case 'ArrowDown':
            keyboard.DOWN = false;
            break;
        case 'Space':
            keyboard.SPACE = false;
            break;
        case 'KeyD':
            keyboard.D = false;
            break;
    }
})