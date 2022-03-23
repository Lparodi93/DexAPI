let containerIn = document.querySelector(".containerIn");
let buscar = document.querySelector(".buscar");
let dex = document.querySelector("#pokeData");
let pokeName = document.querySelector(".pokeName");
let pokeNumber = document.querySelector(".pokeNumber");
let pokeType = document.querySelector(".pokeType");
let pokeType2 = document.querySelector(".pokeType2");
let imgSprite = document.createElement("img")


containerIn = addEventListener("submit", (e) => {

    e.preventDefault();
    busqueda(buscar.value.toLowerCase());
})

function busqueda(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((resp) => resp.json())
        .then((data) => {
            pokeCreate(data);
            //console.log(data)
        })
}

function pokeCreate(miPoke) {
    pokeNumber.textContent = `N°#${miPoke.id}`;
    pokeName.textContent = `Name:${miPoke.name}`;
    pokeType.textContent = miPoke.types.length > 1 ? `Type:${miPoke.types[0].type.name}/${miPoke.types[1].type.name}` : `Type:${miPoke.types[0].type.name}`
    imgSprite.src = miPoke.sprites.front_default;
    pokeData.append(imgSprite);
} 
