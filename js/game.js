let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let soundMuted = false;

//start btn
function startGame() {
    initLevel();
    init();
    document.getElementById('buttons-for-mobile').classList.remove('d-none');
    document.getElementById('deadScreen').classList.add('d-none');
    setSound();
}

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('start-screen').classList.add('d-none');
    buttons.classList.add('d-none');
    ingameButtons.classList.remove('d-none');
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function stopGame() {
    intervalIds.forEach(clearInterval);
}

function togglePopup() {
    document.getElementById('infoControl').classList.remove('d-none');
    document.getElementById('openControl').classList.remove('d-none');
    document.getElementById('control').classList.remove('d-none');
}

function togglePopupClose() {
    document.getElementById('infoControl').classList.add('d-none');
    document.getElementById('openControl').classList.add('d-none');
    document.getElementById('control').classList.add('d-none');
}

function reload() {
    document.getElementById('deadScreen').classList.add('d-none');
    document.getElementById('endScreen').classList.add('d-none');
    document.getElementById('main-game').innerHTML = ``;
    document.getElementById('main-game').innerHTML = htmlTemplate();
    soundMuted = true; // Sound ausschalten
}

function setSound() {
    if (soundMuted) {
        muteSound();
    } else {
        playSound();
    }
}

function muteSound() {
    world.bg_music.volume = 0;
    world.character.snore_sound.volume = 0;
    world.character.walking_sound.volume = 0;
    world.character.dead_sound.volume = 0;
    world.coin_sound.volume = 0;
    world.bottle_sound.volume = 0;
    world.dead_chicken.volume = 0;
    world.endboss_hit.volume = 0;
    world.pepe_hurt.volume = 0;
    world.endboss.end_sound.volume = 0;
    world.bottle_sound.volume = 0;
    world.endboss.endboss_coming.volume = 0;
    world.endboss.win.volume = 0;
    world.splash_sound.volume = 0;

    soundMuted = true;
    document.getElementById('background-sound').innerHTML = `<button onclick="playSound()"> <img src="./img/soundoff.png"> </button>`;
}

// Sounds an
function playSound() {
    world.bg_music.volume = 0.1;
    world.character.snore_sound.volume = 1;
    world.character.walking_sound.volume = 1;
    world.character.dead_sound.volume = 1;
    world.coin_sound.volume = 0.5;
    world.bottle_sound.volume = 0.5;
    world.dead_chicken.volume = 1;
    world.endboss_hit.volume = 1;
    world.endboss.end_sound.volume = 1;
    world.pepe_hurt.volume = 1;
    world.bottle_sound.volume = 1;
    world.endboss.endboss_coming.volume = 1;
    world.splash_sound.volume = 1;
    world.endboss.win.volume = 1;

    soundMuted = false;
    document.getElementById('background-sound').innerHTML = `<button onclick="muteSound()"> <img src="./img/soundon.png"> </button>`;
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

// Handy touch buttons
function mobileTouchControls() {
    document.getElementById("canvas").addEventListener("touchstart", (e) => {
        e.preventDefault();
    });
    mobileButtonLeft();
    mobileButtonRight();
    mobileButtonJump();
    mobileButtonThrow();
}

// Handy touch button LEFT
function mobileButtonLeft() {
    document.getElementById("buttonleft").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById("buttonleft").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
}

// Handy touch button RIGHT
function mobileButtonRight() {
    document.getElementById("buttonright").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById("buttonright").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
}

// Handy touch button JUMP
function mobileButtonJump() {
    document.getElementById("jump").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById("jump").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
}

// Handy touch button THROW
function mobileButtonThrow(){
    document.getElementById("throw").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.D = true;
    });

    document.getElementById("throw").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
}

function loadScreen(){
    setTimeout(() => {
        document.getElementById('main-game').classList.remove('d-none');
        document.getElementById('header').classList.remove('d-none');
        document.getElementById('rotatePhone').classList.remove('d-none');
        document.getElementById('rotate').classList.remove('d-none');
        document.getElementById('loadScreen').classList.add('d-none');
        document.getElementById('body').classList.add('background-image');
    }, 3000);
};