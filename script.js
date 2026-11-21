
// Kryptowährung auswählen
function anzeigen(name, symbol, preis, logo, button) {

    // Informationen ändern
    document.getElementById("name").innerText = name;
    document.getElementById("symbol").innerText = symbol;
    document.getElementById("preis").innerText = preis;

    // Passendes Logo anzeigen
    document.getElementById("bild").src = "bilder/" + logo;

    // Vorherige Auswahl entfernen
    document.querySelectorAll(".coin").forEach(function(coin) {
        coin.classList.remove("aktiv");
    });

    // Ausgewählte Kryptowährung markieren
    button.classList.add("aktiv");
}
