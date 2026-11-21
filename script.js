
// Wird aufgerufen, wenn du eine Kryptowährung auswählst.
function anzeigen(name, symbol, preis, logo, button) {

    document.getElementById("name").innerText = name;
    document.getElementById("symbol").innerText = symbol;
    document.getElementById("preis").innerText = preis;

    // Bild aus dem Ordner Bilder laden
    document.getElementById("bild").src = "Bilder/" + logo;

    // Alte Auswahl entfernen
    document.querySelectorAll(".coin").forEach(function(coin) {
        coin.classList.remove("aktiv");
    });

    // Neue Auswahl markieren
    button.classList.add("aktiv");
}
