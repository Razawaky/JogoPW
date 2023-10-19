const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('#score'); // Elemento para exibir a pontuação
let score = 0;

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const checkCollision = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'assets/img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        clearInterval(loop);
        resetGame(); // Chama a função para reiniciar o jogo
    } else {
        if (pipePosition < 0) {
            updateScore(); // Chama a função para atualizar a pontuação
        }
    }
}

const updateScore = () => {
    score++;
    scoreElement.textContent = score;
}

let loop = setInterval(() => {
    checkCollision();
}, 10);

document.addEventListener('keydown', jump);
