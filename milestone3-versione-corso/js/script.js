let form = document.querySelector("form")
let chilometri = document.getElementById("km-field")
let fasciaEta = document.getElementById("inputEta")
let nomeEcognome = document.getElementById("nomeCognome")

let errorMessage = document.getElementById("error-message")

let nomePasseggero = document.getElementById("nomeCard")
let biglietto = document.getElementById("tipoBigliettoCard")
let carrozzaCard = document.getElementById("carrozzaCard")
let cardCodiceCP = document.getElementById("codiceCP")
let costo = document.getElementById("costoCard")

let btnAnnulla = document.getElementById("bottoneAnnulla")

form.addEventListener("submit", prezzo)
btnAnnulla.addEventListener("click", bottoneAnnulla)

function calcolaPrezzo(chilometri, fascia) {

    let prezzoBase = chilometri * 0.21;
    let prezzoFinale;

    if (fascia === "Minorenne") {
        prezzoFinale = prezzoBase - (prezzoBase * 20 / 100);
    } else if (fascia === "Over 65") {
        prezzoFinale = prezzoBase - (prezzoBase * 40 / 100);
    } else {
        prezzoFinale = prezzoBase;
    }
    return prezzoFinale
}

function prezzo(evento) {

    evento.preventDefault()

    let numeroKm = parseFloat(chilometri.value)
    let fascia = fasciaEta.value

    if (!validaInput(numeroKm)) {
        return
    }

    let prezzoFinale = calcolaPrezzo(numeroKm, fascia)

    let offerta;
    if (fascia === "Minorenne") {
        offerta = "Biglietto Young"
    } else if (fascia === "Over 65") {
        offerta = "Biglietto Senior"
    } else {
        offerta = "Biglietto standard"
    }

    let carrozza = Math.floor(Math.random() * 10) + 1
    let codiceCP = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000


    nomePasseggero.innerHTML = nomeEcognome.value
    biglietto.innerHTML = offerta
    carrozzaCard.innerHTML = carrozza
    cardCodiceCP.innerHTML = codiceCP
    costo.innerHTML = prezzoFinale.toFixed(2)

    form.reset()
}

//Funzione per validazione input
function validaInput(numeroKm) {

    if (!nomeEcognome.value.trim()) {
        errorMessage.innerHTML = "Inserisci un nome valido"
        return false
    }

    if (isNaN(numeroKm) || numeroKm <= 0) {
        errorMessage.innerHTML = "inserisci un numero valido per i chilometri"
        return false
    } else {
        errorMessage.innerHTML = ""
        return true
    }
}

//Funzione per bottone annulla: resetto gli innerHTML al click
function bottoneAnnulla() {

    nomePasseggero.innerHTML = ""
    biglietto.innerHTML = ""
    carrozzaCard.innerHTML = ""
    cardCodiceCP.innerHTML = ""
    costo.innerHTML = ""
}