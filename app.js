

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numero;
    let sorteados = [];
    console.log(quantidade);

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert('Preencha todos os campos');
    } else {
        for (let i = 0; i < quantidade; i++) {

            numero = obterNumeroAleatorio(de, ate);
    
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }
            sorteados.push(numero);
        }
    
        document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    
        if (document.getElementById('btn-reiniciar').classList.contains('container__botao-desabilitado')) {
            alterarStatusBotao();
        }
    

    }
    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    if (document.getElementById('btn-reiniciar').classList.contains('container__botao')) {
        alterarStatusBotao();
    }
}
