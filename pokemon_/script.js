async function stampaListaPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const data = await response.json();

    const listaPokemon = document.getElementById("listaPokemon");

    listaPokemon.innerHTML = "";
    for(let i = 0; i < data.results.length; i++){
        const pokemon = data.results[i];
        const option = document.createElement('option');
        option.value = pokemon.name;
        option.textContent = pokemon.name;
        listaPokemon.append(option);
    }
}

document.addEventListener('DOMContentLoaded', stampaListaPokemon);

const print = document.getElementById("print");

async function printaImg(x){

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
    const data = await response.json();
    const sprite = data.sprites.front_default;

    

}
listaPokemon.addEventListener("change", () =>{

    printaImg(listaPokemon.value);

})
