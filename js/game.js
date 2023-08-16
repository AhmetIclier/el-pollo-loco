let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let soundMuted = false;

/**
 * Start button to initilize the game
 */
function startGame() {
    initLevel();
    init();
    document.getElementById('buttons-for-mobile').classList.remove('d-none');
    document.getElementById('deadScreen').classList.add('d-none');
    setSound();
}

/**
 * creates new world property
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('start-screen').classList.add('d-none');
    buttons.classList.add('d-none');
    ingameButtons.classList.remove('d-none');
}

/**
 * sets intervalls of movesets
 * 
 * @param {function} fn - function
 * @param {number} time - time
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

/**
 * clears every intervall in intervalIds-array
 */
function stopGame() {
    intervalIds.forEach(clearInterval);
}

/**
 * opens controls popup
 */
function togglePopup() {
    document.getElementById('infoControl').classList.remove('d-none');
    document.getElementById('openControl').classList.remove('d-none');
    document.getElementById('control').classList.remove('d-none');
}

/**
 * closes controls popup
 */
function togglePopupClose() {
    document.getElementById('infoControl').classList.add('d-none');
    document.getElementById('openControl').classList.add('d-none');
    document.getElementById('control').classList.add('d-none');
}

/**
 * reloads the game
 */
function reload() {
    document.getElementById('deadScreen').classList.add('d-none');
    document.getElementById('endScreen').classList.add('d-none');
    document.getElementById('main-game').innerHTML = ``;
    document.getElementById('main-game').innerHTML = htmlTemplate();
    soundMuted = true; // Sound ausschalten
}

/**
 * checks if sounds been muted by user
 */
function setSound() {
    if (soundMuted) {
        muteSound();
    } else {
        playSound();
    }
}

/**
 * mutes all sounds
 */
function muteSound() {
    world.bg_music.volume = 0; //done
    world.character.snore_sound.volume = 0;//done
    world.character.walking_sound.volume = 0;//done
    world.character.dead_sound.volume = 0;//done
    world.coin_sound.volume = 0;//done
    world.bottle_sound.volume = 0;//done
    world.dead_chicken.volume = 0;//done
    world.endboss_hit.volume = 0;//done
    world.pepe_hurt.volume = 0;//done
    world.endboss.end_sound.volume = 0;//done
    world.bottle_sound.volume = 0;//done
    world.endboss.endboss_coming.volume = 0;//done
    world.endboss.win.volume = 0;//done
    world.splash_sound.volume = 0;//done
    world.throw_sound.volume = 0;
    soundMuted = true;
    document.getElementById('background-sound').innerHTML = `<button onclick="playSound()"> <img src="./img/mute.svg"> </button>`;
}

/**
 * turns sounds on
 */
function playSound() {
    world.bg_music.volume = 0.3;
    world.character.snore_sound.volume = 0.5;
    world.character.walking_sound.volume = 1;
    world.character.dead_sound.volume = 1;
    world.coin_sound.volume = 0.5;
    world.bottle_sound.volume = 0.5;
    world.dead_chicken.volume = 1;
    world.endboss_hit.volume = 1;
    world.endboss.end_sound.volume = 0.2;
    world.pepe_hurt.volume = 1;
    world.bottle_sound.volume = 1;
    world.endboss.endboss_coming.volume = 0.4;
    world.splash_sound.volume = 1;
    world.endboss.win.volume = 1;
    world.throw_sound.volume = 1;
    soundMuted = false;
    document.getElementById('background-sound').innerHTML = `<button onclick="muteSound()"> <img src="./img/iconmonstr-audio-21.svg"> </button>`;
}

/**
 * eventlistener for controls on keydown to turn Keyboard variables true
 */
window.addEventListener("keydown", (e) => {
    if (e.keyCode == "37") {
        keyboard.LEFT = true;
    }

    if (e.keyCode == "39") {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == "32") {
        keyboard.SPACE = true;
    }

    if (e.code == "KeyD") {
        keyboard.D = true;
    }

    if (e.code == "KeyQ") {
        keyboard.Q = true;
    }
});

/**
 * eventlistener for controls on keyup to turn Keyboard variables back to false
 */
window.addEventListener("keyup", (e) => {

    if (e.keyCode == "37") {
        keyboard.LEFT = false;
    }

    if (e.keyCode == "39") {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == "32") {
        keyboard.SPACE = false;
    }

    if (e.code == "KeyD") {
        keyboard.D = false;
    }

    if (e.code == "KeyQ") {
        keyboard.Q = false;
    }
});

/**
 * controls each control button on mobile and prevents default
 */
function mobileTouchControls() {
    document.getElementById("canvas").addEventListener("touchstart", (e) => {
        e.preventDefault();
    });
    mobileButtonLeft();
    mobileButtonRight();
    mobileButtonJump();
    mobileButtonThrow();
}

/**
 * controls mobile left navigation button
 */
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

/**
 * controls mobile right navigation button
 */
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

/**
 * controls mobile jump navigation button
 */
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

/**
 * controls mobile throw navigation button
 */
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