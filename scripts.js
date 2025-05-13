// Função de login simulada
function login() {
    // Obtém os valores dos campos de entrada de email e senha
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verifica se os campos estão preenchidos
    if (email && password) {
        // Oculta a seção de login
        document.getElementById("login").classList.add("hidden");

        // Exibe a seção de boas-vindas
        document.getElementById("bemvindo").classList.remove("hidden");

        // Exibe uma mensagem de boas-vindas personalizada
        const welcomeMessage = Bem-vindo, ${email}!;
        alert(welcomeMessage); // Mostra um alerta com a mensagem de boas-vindas
    } else {
        // Mostra uma mensagem de erro caso os campos não estejam preenchidos
        alert("Por favor, preencha todos os campos!");
    }
}

// Manipulação de navegação entre seções
// Seleciona todos os links do menu de navegação
const navLinks = document.querySelectorAll("header nav ul li a");

// Adiciona um evento de clique para cada link
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        // Impede o comportamento padrão do link (não recarrega a página)
        event.preventDefault();

        // Obtém o ID da seção alvo a partir do atributo href do link
        const targetId = this.getAttribute("href").substring(1);

        // Oculta todas as seções do main
        document.querySelectorAll("main section").forEach(section => {
            section.classList.add("hidden");
        });

        // Exibe apenas a seção alvo
        document.getElementById(targetId).classList.remove("hidden");
    });
});

// Função para inicializar o comportamento padrão
function initializePage() {
    // Por padrão, exibe a seção de login e esconde as outras
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("bemvindo").classList.add("hidden");
    document.getElementById("eventos").classList.add("hidden");
}

// Garante que a função de inicialização seja chamada ao carregar a página
window.addEventListener("load", initializePage);