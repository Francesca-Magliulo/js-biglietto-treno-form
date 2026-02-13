
let chilometri = document.getElementById("km-field")
let eta = document.getElementById("eta-field")
let button = document.getElementById("button")

let form = document.querySelector("form")

form.addEventListener("submit", prezzo)

function prezzo(evento) {
    
    evento.preventDefault()
    
    let numeroKm = parseFloat(chilometri.value)
    let numeroEta = parseInt(eta.value)
    let prezzoBase = numeroKm * 0.21;
    let prezzoFinale;

    if (numeroEta < 18) {
        prezzoFinale = prezzoBase - (prezzoBase * 20 / 100);
        console.log(prezzoFinale)
    } else if (numeroEta > 65) {
        prezzoFinale = prezzoBase - (prezzoBase * 40 / 100);
        console.log(prezzoFinale)
    } else {
        prezzoFinale = prezzoBase;
        console.log(prezzoFinale)
    }


    console.log("Il prezzo del biglietto è €" + prezzoFinale.toFixed(2));
}




















