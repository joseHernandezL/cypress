Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignorar errores específicos
    if (
        err.message.includes("Bootstrap's JavaScript requires jQuery") ||
        err.message.includes("Cannot read properties of undefined (reading 'top')")
    ) {
        return false; // Evita que Cypress falle la prueba
    }
    // Permitir otros errores
    return true;
});

