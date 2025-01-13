// selezione degli elementi
const lampadaAccesa = document.getElementById("lampada");
const bottone = document.getElementById("bottoneLamp");




// evento
bottone.addEventListener("click", function () {
    // cambio dell img   
    if (lampadaAccesa.src.includes("yellow_lamp.png")) {
        lampadaAccesa.src = "./ig/white_lamp.png";
        lampadaAccesa.alt = "Lampada spenta";
        bottone.textContent = "ACCENDI";
    } else {
        // cambio del testo nel bottone
        lampadaAccesa.src = "./im/yellow_lamp.png";
        lampadaAccesa.alt = "Lampada accesa";
        bottone.textContent = "SPEGNI";
    }
    
});