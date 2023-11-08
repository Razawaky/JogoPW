// Elementos Globais
//selecionando um elemento HTML com o ID 'imgMario' usando document.querySelector e armazenando-o na variável imgMario
const imgMario = document.querySelector('#imgMario');

// Funções
//definindo uma função chamada playSom que recebe um parâmetro elemento
const playSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`); //document.querySelector para selecionar um elemento de áudio com o ID especificado no parâmetro elemento

    element.play(); //Em seguida toca o play
};

const stopSom = (elemento) => { //função chamada stopSom que também recebe um parâmetro elemento
    const element = document.querySelector(`#${elemento}`); //document.querySelector para selecionar o elemento de áudio com o ID especificado no parâmetro elemento

    element.pause(); //pause() no elemento de áudio para interromper a reprodução desse som
};

const pular = ({ key }) => { // função chamada pular que recebe um objeto como parâmetro com uma propriedade key
    if (key === 'ArrowUp') { //verifica se a propriedade key é igual a 'ArrowUp'
        imgMario.classList.add('pular'); //adiciona a classe 'pular' ao elemento imgMario

        playSom('somPulo');//reproduz o som do pulo

        setTimeout(() => { //setTimeout para remover a classe 'pular'
            imgMario.classList.remove('pular');
        }, 500);
    }
};

const limparTexto = () => { // definindo a função limparTexto
    inputJogador.value = '';
    btnStart.setAttribute('disabled', ''); // btnStart definindo o atributo disabled para desativá-lo
};

//exporta as funções playSom, stopSom, pular, limparTexto e a variável imgMario
export { playSom, stopSom, pular, limparTexto, imgMario }; 


