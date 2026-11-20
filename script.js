// Hier speichern wir die Favoriten.
let favoriten = [];

// Diese Funktion fügt eine Kryptowährung zu den Favoriten hinzu.
function favoritHinzufuegen(name) {

    // Prüfen, ob die Kryptowährung schon in den Favoriten ist.
    if (favoriten.includes(name)) {
        alert("Diese Kryptowährung ist schon ein Favorit.");
    } else {
        favoriten.push(name);
        alert(name + " wurde zu den Favoriten hinzugefügt.");
    }

    // Favoriten auf der Webseite anzeigen.
    favoritenAnzeigen();
}

// Diese Funktion zeigt alle Favoriten an.
function favoritenAnzeigen() {
    let liste = document.getElementById("favoriten");

    liste.innerHTML = "";

    if (favoriten.length == 0) {
        liste.innerHTML = "<li>Noch keine Favoriten.</li>";
    }

    for (let i = 0; i < favoriten.length; i++) {
        let eintrag = document.createElement("li");
        eintrag.textContent = favoriten[i];
        liste.appendChild(eintrag);
    }
}

// Diese Funktion zeigt Informationen an.
function infoAnzeigen(name) {
    let text = "";

    if (name == "Bitcoin") {
        text = "Bitcoin ist die bekannteste Kryptowährung.";
    }

    if (name == "Ethereum") {
        text = "Ethereum ist eine Plattform für digitale Anwendungen.";
    }

    if (name == "Solana") {
        text = "Solana ist eine Blockchain mit schnellen Transaktionen.";
    }

    document.getElementById("informationen").textContent = text;
}

// Diese Funktion sucht nach Kryptowährungen in der Tabelle.
document.getElementById("suche").addEventListener("keyup", function() {

    let suchtext = document.getElementById("suche").value.toLowerCase();
    let zeilen = document.querySelectorAll("table tr");

    // Die erste Zeile enthält die Überschriften und bleibt sichtbar.
    for (let i = 1; i < zeilen.length; i++) {

        let name = zeilen[i].cells[0].textContent.toLowerCase();

        if (name.includes(suchtext)) {
            zeilen[i].style.display = "";
        } else {
            zeilen[i].style.display = "none";
        }
    }
});
