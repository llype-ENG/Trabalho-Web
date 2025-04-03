// Função para alternar o tema entre claro e escuro
function toggleTheme() {
    var body = document.body;

    // Alterna a classe 'dark-theme' no body
    body.classList.toggle('dark-theme');

    // Salva a escolha do tema no localStorage
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Carregar o tema salvo no armazenamento local
function loadTheme() {
    var savedTheme = localStorage.getItem('theme');

    // Se o tema salvo for 'dark', adiciona a classe 'dark-theme'
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Interação com o botão de alternar tema
document.getElementById('toggleThemeBtn')?.addEventListener('click', function () {
    toggleTheme(); // Chama a função de alternar tema
});

// Inicializa o tema carregando o tema salvo e configurando o contador de doações
window.onload = function () {
    loadTheme();  // Carrega o tema salvo no localStorage
};
