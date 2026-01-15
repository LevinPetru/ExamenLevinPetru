// Afișează un mesaj în consolă când pagina este încărcată
document.addEventListener("DOMContentLoaded", function () {
    console.log("Pagina a fost încărcată cu succes!");

    // Selectează toate link-urile de pe pagină
    const links = document.querySelectorAll("a");

    // Adaugă un efect simplu la click
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            alert("Ai făcut click pe un link!");
        });
    });
});
