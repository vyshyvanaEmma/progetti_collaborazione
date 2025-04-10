const listaPokemon = document.getElementById("listaPokemon");















































//MAX limit

const print = document.getElementById("print");

async function printaImg(x){

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
    const data = await response.json();
    const sprite = data.sprites.front_default;

    

}
listaPokemon.addEventListener("change", () =>{

    printaImg(listaPokemon.value);

})