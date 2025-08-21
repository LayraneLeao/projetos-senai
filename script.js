// Seleciona o textarea e o elemento do contador
const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

// Função que atualiza o contador
function updateCharCount() {
    const length = textarea.value.length;
    charCount.textContent = `${length} / 2000 characters`;
}

// Evento que chama a função sempre que o usuário digita algo
textarea.addEventListener('input', updateCharCount);

// Inicializa o contador no carregamento da página
updateCharCount();

// Validação do formulário
document.getElementById('fitnessForm').addEventListener('submit', function(event) {
    const privacyCheckbox = document.getElementById('privacyPolicy');
    
    if (!privacyCheckbox.checked) {
        event.preventDefault();
        alert('Please agree to the Privacy Policy and Terms of Service');
        privacyCheckbox.focus();
    }
});