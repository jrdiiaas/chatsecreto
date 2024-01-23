// @author ALEXANDRE_SOUSA_DIAS_JUNIOR <jrdiiaas@icloud.com>

// Cria uma função para adicionar ações ao input
function enviarTexto() {
    // Transforma o elemento inputText ID em uma variável
    const inputText = document.getElementById('inputText');
    // Transforma o elemento outputText em uma variável
    const outputText = document.getElementById('outputText');

    // Cria a função texto que recebe o valor do inputText
    const texto = inputText.value.trim();

    // Condição se o texto diferente de vazio
    if (texto !== '') {

        // Criar um novo parágrafo
        const paragrafo = document.createElement('p');

        // Dividir o texto em palavras
        const palavras = texto.split(' ');

        /* Para cada palavra, criar um elemento de span com a classe 'word'
        Inicia um loop que percorre cada elemento no array palavras. O método forEach é usado para iterar sobre cada item no array, e a função de callback (palavra) => {...} é executada para cada item. */
        palavras.forEach((palavra) => {

            // Cria um novo elemento HTML < span >. Este elemento < span > será usado para envolver cada palavra.
            const span = document.createElement('span');
            //  Define o texto do elemento < span > criado para ser igual à palavra atual no loop. Cada < span > representa uma palavra do texto original.
            span.textContent = palavra;
            // Adiciona a class word em cada span. Isso garante que cada palavra tenha a classe 'word'.
            // span.classList.add('word');
            // Faz com que cada elemento que seja <span> que contém a palavra como filho do elemento <p> fique agrupado dentro do <p>.
            paragrafo.appendChild(span);
            // Adicionar um espaço entre as palavras
            paragrafo.appendChild(document.createTextNode(' '));
        });

        // Adicionar o novo parágrafo ao output
        outputText.appendChild(paragrafo);
    }

    // Limpar o input
    inputText.value = '';
}

function limparTexto() {
    // Limpa o elemento de saída
    document.getElementById('outputText').innerText = '';
}

function main() {
    console.log('main rodando');
    // Envolve o código em um evento de carregamento da página
    const outputText = document.getElementById('outputText');
    console.log(outputText);
    // Verifica se o elemento 'outputText' existe antes de adicionar os event listeners
    if (outputText) {
        outputText.addEventListener('mouseover', function (event) {
            console.log("mouseover evento detectado");
            const target = event.target;

            outputText.classList.remove('word');
            // // Verifica se o elemento sobre o qual o mouse passou é uma palavra com a classe 'word'
            // if (target.classList.contains('word')) {
            //     // Remove a classe 'word' quando o mouse passa sobre a palavra

            // }
            // // outputText.style.color = "red";
        });

        outputText.addEventListener('mouseout', function (event) {
            // console.log("mouseout evento detectado");
            // const target = event.target;
            outputText.classList.add('word');
            // outputText.style.color = "lightblue";
        });
    }
}