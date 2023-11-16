document.addEventListener("DOMContentLoaded", function () {
    // Chiedi il nome
    var nome = prompt("Inserisci il tuo nome:");

    // Chiedi il cognome
    var cognome = prompt("Inserisci il tuo cognome:");

    // Chiedi il colore preferito
    var colore = prompt("Inserisci il tuo colore preferito:");

    // Costruisci la stringa e aggiorna l'elemento h1
    var risultato = nome + cognome + colore + "23";
    document.getElementById("mio_id").innerText = risultato;
});
