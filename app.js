
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numero;
    let sorteados = [];

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || ate <= de) {
        alert('Preencha todos os campo\n"Até o número" deve ser maior que o "Do número"');

    } else if (quantidade > (ate - de +1)) {
        alert('"Quantidade de números" deve ser menor que o intervalo de números possíveis')

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
