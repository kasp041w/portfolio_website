window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    /*----Meow lyd på billed------*/
    document.querySelector("#villadsOgMig").addEventListener("mousedown", meow);

}


function meow() {
    console.log("meow");
    document.querySelector("#meow").volume = 0.5;
    document.querySelector("#meow").play();
}
