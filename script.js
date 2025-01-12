// selezione degli elementi
const lampadaAccesa = document.getElementById("lampada");
const bottone = document.getElementById("bottoneLamp");




// evento
bottone.addEventListener("click", function () {
    // cambio dell img
    lampadaAccesa.src = "./img/yellow_lamp.png"
    // cambio del testo nel bottone
    bottone.textContent = "SPEGNI"
})