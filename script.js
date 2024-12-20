document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("#registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita o comportamento padrão do formulário

            // Obtém o tipo de usuário selecionado
            const userType = document.querySelector("#userType").value;

            // Redireciona o usuário para a página correspondente
            if (userType === "empresa") {
                window.location.href = "cadastroEmpresa.html"; // Página de cadastro para empresas
            } else if (userType === "candidato") {
                window.location.href = "candidato.html"; // Página de cadastro para candidatos
            } else {
                alert("Por favor, selecione um tipo de usuário válido.");
            }
        });
    }
});

