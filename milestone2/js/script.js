

/*Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati
 e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina
 (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


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




















