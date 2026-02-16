/*
Implementazioni:
1) Aggiungere condizione per sconto km >= 500

2) validazione input

3) mostrare sconto nella card

4) pulsante nuovo calcolo + nascondi card

5) lista storico calcoli 
*/

let chilometri = document.getElementById("km-field")
let eta = document.getElementById("eta-field")

let form = document.querySelector("form")

let errorMessage = document.getElementById("error-message")

let btnNuovoCalcolo = document.getElementById("new-button")
let card = document.querySelector(".card")

let listaStoricoCalcoli = document.getElementById("lista-storico")

form.addEventListener("submit", prezzo)

btnNuovoCalcolo.addEventListener("click", bottoneNuovoCalcolo)

function calcolaPrezzo(chilometri, eta) {

    let prezzoBase = chilometri * 0.21;
    let prezzoFinale;

    if (eta < 18) {
        prezzoFinale = prezzoBase - (prezzoBase * 20 / 100);
    } else if (eta > 65) {
        prezzoFinale = prezzoBase - (prezzoBase * 40 / 100);
    }else {
        prezzoFinale = prezzoBase;
    }

    if(chilometri >= 500) {
        prezzoFinale = prezzoFinale - (prezzoFinale * 10 / 100)
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

    let scontoApplicato;
    if(numeroEta < 18) {
        scontoApplicato = 20
    } else if(numeroEta > 65) {
        scontoApplicato = 40
    } else {
        scontoApplicato = 0
    }
    //Aggiungo la condizione per cui se i km sono uguali o superiori a 500 si applica un ulteriore sconto del 10%
    if(numeroKm >= 500) {
        scontoApplicato += 10
    }

    let kmCard = document.getElementById("km-card")
    let etaCard = document.getElementById("eta-card")
    let priceCard = document.getElementById("price-card")
    let scontoCard = document.getElementById("sconto-card")


    kmCard.innerHTML = numeroKm
    etaCard.innerHTML = numeroEta
    priceCard.innerHTML = prezzoFinale.toFixed(2)

    //mostro nella card lo sconto applicato
    scontoCard.innerHTML = scontoApplicato + "%"
    //Mostro la card quando faccio un nuovo calcolo
    card.style.display = "block"

    eta.value = ""
    chilometri.value = ""

    //Creo la lista dello storico
    let li = document.createElement("li")
    //Applico una classe di stile ai li
    li.classList.add("list-group-item")
    li.innerHTML = `Km: ${numeroKm} | Età: ${numeroEta} | Prezzo: ${prezzoFinale.toFixed(2)}€ | Sconto: ${scontoApplicato}%`
    // Aggiungo li a ul con prepend() per far apparire l'ultimo calcolo in alto
    listaStoricoCalcoli.prepend(li)

}

//Funzione per validazione input
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

//Funzione per bottone nuovo calcolo del prezzo: resetto gli innerHTML al click
function bottoneNuovoCalcolo() {

    let kmCard = document.getElementById("km-card")
    let etaCard = document.getElementById("eta-card")
    let priceCard = document.getElementById("price-card")
    let scontoCard = document.getElementById("sconto-card")

    kmCard.innerHTML = ""
    etaCard.innerHTML = ""
    priceCard.innerHTML = ""
    scontoCard.innerHTML = ""

    //Nascondo la card quando clicco "calcola nuovo prezzo"
    card.style.display = "none"
}