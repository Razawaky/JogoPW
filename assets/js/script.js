const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('#score'); // Elemento para exibir a pontuação
let score = 0; // Inicialize a pontuação em 0 no início do jogo
let loop, scoreTimer; // Declare as variáveis para os temporizadores

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const updateScore = () => {
    score++;
    scoreElement.textContent = score;
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
        clearInterval(scoreTimer); // Pare o temporizador de pontuação
        resetGame(); // Chama a função para reiniciar o jogo
    }
}

loop = setInterval(() => {
    checkCollision();
}, 10);

// Inicie o temporizador de pontuação
scoreTimer = setInterval(updateScore, 100); // Aumenta a pontuação a cada segundo

document.addEventListener('keydown', jump);