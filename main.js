let containerIn = document.querySelector(".containerIn");
let buscar = document.querySelector(".buscar");

containerIn = addEventListener("input", () => { //esto lo intenté de varias maneras, no sé si usar un search, un input o submit, ya probé los 3 y no me funcionó

    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`) //aca la idea es que busque el nombre que entra por el input
        .then((resp) => resp.json())
        .then((data) => {
            let dex = document.querySelector("#pokedex");
            dex.innerHTML = `<p>${data.name}</p>
        <p>${(data.id)}</p>
        <img src='${data.sprites.front_default}'/>
        `
            console.log(data)
        })



})

