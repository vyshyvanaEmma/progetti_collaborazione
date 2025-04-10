//parte Emma

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