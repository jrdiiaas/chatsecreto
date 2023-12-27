function enviarTexto() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    const texto = inputText.value.trim();

    if (texto !== '') {
        // Criar um novo parágrafo
        const paragrafo = document.createElement('p');

        // Dividir o texto em palavras
        const palavras = texto.split(' ');

        // Para cada palavra, criar um elemento de span com a classe 'word'
        palavras.forEach((palavra) => {
            const span = document.createElement('span');
            span.textContent = palavra;
            span.classList.add('word');
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

// Envolve o código em um evento de carregamento da página
document.addEventListener('DOMContentLoaded', function () {
    const outputText = document.getElementById('outputText');

    // Verifica se o elemento 'outputText' existe antes de adicionar os event listeners
    if (outputText) {
        outputText.addEventListener('mouseover', function (event) {
            const target = event.target;

            // Verifica se o elemento sobre o qual o mouse passou é uma palavra com a classe 'word'
            if (target.classList.contains('word')) {
                // Remove a classe 'word' quando o mouse passa sobre a palavra
                target.classList.remove('word');
            }
        });

        outputText.addEventListener('mouseout', function (event) {
            const target = event.target;

            // Verifica se o mouse saiu do elemento que era uma palavra
            if (target.classList.contains('word')) {
                // Adiciona a classe 'word' de volta quando o mouse sai da palavra
                target.classList.add('word');
            }
        });
    }
});