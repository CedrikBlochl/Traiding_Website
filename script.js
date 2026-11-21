// Wird aufgerufen, wenn du auf eine Kryptowährung klickst.
function anzeigen(name, symbol, preis, logo, button) {
    document.getElementById("name").innerText = name;
    document.getElementById("symbol").innerText = symbol;
    document.getElementById("preis").innerText = preis;
    document.getElementById("bild").src = "logos/" + logo;

    document.querySelectorAll(".coin").forEach(function(coin) {
        coin.classList.remove("aktiv");
    });
    button.classList.add("aktiv");
}
