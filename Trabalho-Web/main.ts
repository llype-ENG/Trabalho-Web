// Função para alternar o tema entre claro e escuro
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Carregar tema salvo no armazenamento local
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Contador de Doações
let donationCount = 0;

function updateDonationCount() {
    const counter = document.getElementById('donationCounter');
    if (counter) {
        counter.textContent = `Doações: ${donationCount}`;
    }
}

function incrementDonation() {
    donationCount++;
    updateDonationCount();
}

// Validar Formulário de Doação (supondo que você tenha um formulário com id="donationForm")
function validateForm() {
    const form = document.getElementById('donationForm') as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', (event) => {
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const amount = (document.getElementById('amount') as HTMLInputElement).value;
            
            if (!email || !amount) {
                event.preventDefault();
                alert('Por favor, preencha todos os campos!');
            }
        });
    }
}

// Interações com os Botões
document.getElementById('saibaMaisBtn')?.addEventListener('click', () => {
    alert('Você clicou em Saiba Mais!');
});

document.getElementById('nosAjudeBtn')?.addEventListener('click', () => {
    donationCount++; // Incrementa a doação como exemplo
    updateDonationCount(); // Atualiza o contador
});

// Inicializa o tema e contador
window.onload = () => {
    loadTheme();
    updateDonationCount();
    validateForm();
};
