let containerIn = document.querySelector(".containerIn");
let buscar = document.querySelector(".buscar");

containerIn = addEventListener("submit", (e) => {

    e.preventDefault();
    busqueda(buscar.value);
})

function busqueda(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) //aca la idea es que busque el nombre que entra por el input
        .then((resp) => resp.json())
        .then((data) => {
            pokeCreate(data);
        })
}

function pokeCreate(miPoke) {
    let dex = document.querySelector("#pokeData");
    dex.innerHTML = `<p>${miPoke.name}</p>
    <p>${(miPoke.id)}</p>
    <img src='${miPoke.sprites.front_default}'/>`
}
