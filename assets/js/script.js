const mario = document.querySelector('.mario'); //Constante que adiciona a class 'mario'
const pipe = document.querySelector('.pipe'); //Constante que adiciona a class 'pipe' (cano)

const jump = () => { //Constante referente ao evento de pular do Mario
    mario.classList.add('jump'); //Adiciona a class 'jump' (pular) que faz o Mario ir para cima

    setTimeout(( ) => { //Intervalo de tempo
 
        mario.classList.remove('jump'); //Retira o class 'pular' do Mario, fazendo pular 

    }, 500); //500ms
}

const loop = setInterval(() => {  //intervelo entre o cano e o Mario que resulta em game-over
    const pipePosition = pipe.offsetLeft; //constante referente a posição esquerda do cano
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //Constante que muda a posição do mario e pega qualquer propriedade css

    //If referente ao final do jogo
    if (pipePosition <= 120 && marioPosition < 80) { //Se a posição do cano for menor ou igual a 120px | E se a posição do mario for menor que 80 px cima e baixo
        pipe.style.animation = 'none'; //Tira a animação de pulo
        pipe.style.left = `${pipePosition}px`; //Para o Mario na posição do cano
    
        mario.style.animation = 'none'; //para a animação
        mario.style.bottom = `${marioPosition}px`; //define que a propriedade 'bottom' do mario vai a mesma quando ele enconstar no cano, ele não vai voltar para 0
    
        mario.src = 'assets/img/game-over.png' //Quando o mario morrer vai trocar a imagem para a cena de morte
        mario.style.width = '75px'; //Altera o tamanho do png do mario morto
        mario.style.marginLeft = '50px'  //Altera a margem entre o png mario morto e o cano
   
        clearInterval(loop); //Para de rodar a constante loop
    }

}, 10)

document.addEventListener('keydown', jump); //Evento que adiciona pulo ao clicar na seta 