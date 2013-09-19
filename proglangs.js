function meny(value){ // definerer funksjonen som skal brukes, i dette tilfellet resultatet fra select
        document.getElementById("resultat1").innerHTML = value; // henter resultatet fra select og endrer <div>
		document.getElementById("resultat2").innerHTML = "Gratulerer, du valgte:";
    }


function AlertIt() {
var answer = confirm ("Siden er under konstruksjon, biaaatch!.")
if (answer)
window.location="proglangs2.html";
}
