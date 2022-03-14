fetch("https://pokeapi.co/api/v2/pokemon/155")
    .then( (resp) => resp.json() )
    .then( (data) => {
        let dex = document.querySelector("#pokedex");
        dex.innerHTML = `<p>${data.name}</p>
        <p>${(data.id)}</p>
        <img src='${data.sprites.front_default}'/>
        `



        console.log(data)
    })