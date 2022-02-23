let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// CREATE RANDOM COLOR ORDER
let shuffleOrder = () => {
    order[order.length] = Math.floor(Math.random() * 4);
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// ADD NEXT COLOR
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

// CHECK IF CLICKED ORDER IS EQUALS TO GAME
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] !== order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length === order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// USER CLICK
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// SHOW COLORS
let createColorElement = (color) => {
    switch (color) {
        case 0:
            return green;
        case 1:
            return red;
        case 2:
            return yellow;
        case 3:
            return blue;
    }
}

// NEXT LEVEL
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// GAME OVER
let gameOver = () => {
    alert(`Pontuação: ${score}\n Você perdeu o jogo! \n Clique em OK para inicar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

// START GAME
let playGame = () => {
    alert(`Bem vindo ao Gênesis! Iniciando novo jogo!`);
    score = 0;

    nextLevel();
}

// CLICK EVENTS
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// START
playGame();