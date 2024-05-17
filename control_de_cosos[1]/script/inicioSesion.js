document.addEventListener("DOMContentLoaded", function () {
    const inicioSesionForm = document.getElementById("inicio-sesion-form");
    const message = document.getElementById("message");
    const regresarIndexButton = document.getElementById("regresar-index");
    const regresarRegistroButton = document.getElementById("regresar-registro");
    const regresarAdminButton = document.getElementById("regresar-admin");

    inicioSesionForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Obtener los usuarios almacenados en localStorage
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Validar credenciales
        const usuarioEncontrado = usuarios.find(user => user.username === username && user.password === password);

        if (usuarioEncontrado) {
            showMessage("Inicio de sesión exitoso.", "success");
            // Redirigir al usuario a la página de perfil
            window.location.href = "perfil.html";
        } else {
            showMessage("Credenciales incorrectas. Por favor, inténtelo nuevamente.", "error");
        }
    });

    function showMessage(text, type) {
        message.textContent = text;
        message.className = type === "error" ? "error" : "success";
        if (type === "success") {
            alert("Inicio de sesión exitoso.");
        } else if (type === "error") {
            alert("Credenciales incorrectas. Por favor, inténtelo nuevamente.");
        }
    }

    regresarIndexButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
    regresarRegistroButton.addEventListener("click", function () {
        window.location.href = "registro.html";
    });
    regresarAdminButton.addEventListener("click", function () {
        window.location.href = "login2.html";
    });
});
