/*
1) validazione input

2) mostrare sconto nella card

3) pulsante nuovo calcolo + nascondi card

4) lista transazioni 
*/

let chilometri = document.getElementById("km-field")
let eta = document.getElementById("eta-field")

let form = document.querySelector("form")

let errorMessage = document.getElementById("error-message")

form.addEventListener("submit", prezzo)

function calcolaPrezzo(chilometri, eta) {

    let prezzoBase = chilometri * 0.21;
    let prezzoFinale;

    if (eta < 18) {
        prezzoFinale = prezzoBase - (prezzoBase * 20 / 100);
    } else if (eta > 65) {
        prezzoFinale = prezzoBase - (prezzoBase * 40 / 100);
    } else {
        prezzoFinale = prezzoBase;
    }
    return prezzoFinale
}

function prezzo(evento) {

    evento.preventDefault()

    let numeroKm = parseFloat(chilometri.value)
    let numeroEta = parseInt(eta.value)


    if (!validaInput(numeroKm, numeroEta)) {
        return
    }

    let prezzoFinale = calcolaPrezzo(numeroKm, numeroEta)

    let kmCard = document.getElementById("km-card")
    let etaCard = document.getElementById("eta-card")
    let priceCard = document.getElementById("price-card")



    kmCard.innerHTML = numeroKm
    etaCard.innerHTML = numeroEta
    priceCard.innerHTML = prezzoFinale.toFixed(2)

    eta.value = ""
    chilometri.value = ""

}

//Validazione input
function validaInput(numeroKm, numeroEta) {

    if (isNaN(numeroKm) || numeroKm <= 0) {
        errorMessage.innerHTML = "inserisci un numero valido per i chilometri"
        return false
    } else if (isNaN(numeroEta) || numeroEta <= 0) {
        errorMessage.innerHTML = "inserisci un numero valido per l'età"
        return false
    } else {
        errorMessage.innerHTML = ""
        return true
    }
}