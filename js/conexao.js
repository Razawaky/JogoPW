//está definindo uma função chamada setBanco que recebe um parâmetro banco. 
//usa o método setItem do objeto localStorage

const setBanco = (banco) => {
    localStorage.setItem('bd-mario', banco);
}; 

//definindo outra função chamada getBanco. Esta função não recebe nenhum parâmetro.
//Ela usa o método getItem do objeto localStorage

const getBanco = () => {
    return JSON.parse(localStorage.getItem('bd-mario')) ?? [];
};

//definindo uma função chamada bancoTemp que recebe quatro parâmetros: nome, moedas, tempo e pontuacao.

const bancoTemp = (nome, moedas, tempo, pontuacao) => {

    let banco = getBanco(); //função getBanco() para obter o array atual do armazenamento local e o armazena na variável banco.

    let dados = {//cria um objeto dados com as informações do jogador, como o nome, moedas, tempo e pontuação.
        nomeJogador: nome,
        moedasJogador: moedas,
        tempoJogador: tempo,
        pontuacaoJogador: pontuacao
    };

    banco.unshift(dados); //insere o objeto dados no início do array banco usando unshift

    setBanco(JSON.stringify(banco)); //você chama a função setBanco para atualizar o armazenamento local com o array atualizado
};

export { setBanco, getBanco, bancoTemp };