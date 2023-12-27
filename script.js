function enviarTexto() {
    // Obtém o valor do campo de entrada
    var inputValue = document.getElementById('inputText').value;

    // Atualiza o conteúdo do elemento de saída
    document.getElementById('outputText').innerText = inputValue;

    // Limpa o campo de entrada
    document.getElementById('inputText').value = '';
}

// Adiciona um ouvinte de eventos ao campo de entrada para detectar alterações
document.getElementById('inputText').addEventListener('input', function () {
    // Pode adicionar funcionalidades adicionais aqui se necessário
});