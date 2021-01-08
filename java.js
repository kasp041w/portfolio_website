window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    /*---- Lytter til om burgermenu bliver trykket på-------*/
    document.querySelector("#menuknap").addEventListener("click", toggleMenu)

    /*----Meow lyd på billed------*/
    document.querySelector("#villadsOgMig").addEventListener("mousedown", meow)

}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";


    } else {
        document.querySelector("#menuknap").textContent = "⨯";

    }

}

function meow() {
    console.log("meow");
    document.querySelector("#meow").volume = 0.5;
    document.querySelector("#meow").play();
}
