let attempts = 0;
const maxAttempts = 2;
const correctCode = "D3F9L2";

function unlockCryptex() {
    const nameInput = document.getElementById('nameInput').value;
    const userInput = document.getElementById('codeInput').value;
    const message = document.getElementById('message');
    const morseSection = document.getElementById('morseSection');

    if (nameInput === "") {
        message.textContent = "Por favor, ingresa el nombre de la pareja.";
        return;
    }

    if (attempts < maxAttempts) {
        if (userInput === correctCode) {
            message.style.color = 'green';
            message.textContent = "Para encontrar la respuesta final, descifra este mensaje en código Morse: \".--. .-. --- - --- -.-. --- .-.. --- / -.-- / . - .. --.- ..- . - .-\" Para verificar tu respuesta, suma los valores numéricos de las letras de las tres palabras y divide el resultado por 2.";
            morseSection.style.display = 'block';
        } else {
            attempts++;
            message.style.color = 'red';
            message.textContent = `Código incorrecto. Intento ${attempts} de ${maxAttempts}.`;
        }
    } else {
        message.style.color = 'red';
        message.textContent = "Número máximo de intentos alcanzado.";
    }
}

function verifyMorseAnswer() {
    const morseAnswerInput = document.getElementById('morseAnswerInput').value;
    const message = document.getElementById('message');

    if (parseInt(morseAnswerInput) === 126) { // Valor numérico ajustado para "PROTOCOLO Y ETIQUETA"
        message.style.color = 'green';
        message.textContent = "¡Felicitaciones! Has resuelto la prueba. La palabra es 'RELACIONES INTERNACIONALES'.";
    } else {
        message.style.color = 'red';
        message.textContent = "Respuesta incorrecta. Intenta de nuevo.";
    }
}
