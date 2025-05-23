
// Fecha de inicio del amor
const startDate = new Date("2024-12-06T00:00:00");
const timerElement = document.getElementById("timer");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerElement.textContent = `Hemos estado juntos por: ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos 💞`;
}

setInterval(updateTimer, 1000);
updateTimer();
