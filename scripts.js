// Função para validar o formato do e-mail
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Função de login simulada
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verifica se o e-mail é válido
    if (!isValidEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Simulação de verificação de e-mail e senha
    const validEmail = "usuario@exemplo.com";
    const validPassword = "senha123";

    if (email === validEmail && password === validPassword) {
        document.getElementById("login").classList.add("hidden");
        document.getElementById("bemvindo").classList.remove("hidden");
        alert(`Bem-vindo, ${email}!`);
    } else if (email !== validEmail) {
        alert("E-mail não cadastrado.");
    } else {
        alert("Senha incorreta.");
    }
}

// Função para alternar a visibilidade da senha
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const toggleButton = document.getElementById("togglePassword");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Ocultar";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Mostrar";
    }
}

// Inicializa o comportamento da página
function initializePage() {
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("bemvindo").classList.add("hidden");
    document.getElementById("eventos").classList.add("hidden");

    // Adiciona o evento de clique para o botão de mostrar/ocultar senha
    document.getElementById("togglePassword").addEventListener("click", togglePasswordVisibility);
}

// Garante que a função de inicialização seja chamada ao carregar a página
window.addEventListener("load", initializePage);