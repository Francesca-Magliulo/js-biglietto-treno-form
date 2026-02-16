
let chilometri = document.getElementById("km-field")
let eta = document.getElementById("eta-field")

let form = document.querySelector("form")

form.addEventListener("submit", prezzo)

function prezzo(evento) {

    evento.preventDefault()

    let numeroKm = parseFloat(chilometri.value)
    let numeroEta = parseInt(eta.value)
    let prezzoBase = numeroKm * 0.21;
    let prezzoFinale;
    let kmCard = document.getElementById("km-card")
    let etaCard = document.getElementById("eta-card")
    let priceCard = document.getElementById("price-card")

    if (numeroEta < 18) {
        prezzoFinale = prezzoBase - (prezzoBase * 20 / 100);
    } else if (numeroEta > 65) {
        prezzoFinale = prezzoBase - (prezzoBase * 40 / 100);
    } else {
        prezzoFinale = prezzoBase;
    }

    kmCard.innerHTML = numeroKm
    etaCard.innerHTML = numeroEta
    priceCard.innerHTML = prezzoFinale.toFixed(2)

    eta.value = ""
    chilometri.value = ""

}




















