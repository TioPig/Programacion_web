function buscarPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(res => res.json())
        .then(data => {
            console.log(data)   
            
            let nombre_pokemon = data.name;
            let habilidades = data.abilities;

            for (let i = 0; i < habilidades.length; i++) {
                console.log(habilidades[i])
            }
            
        })
        .catch(err => console.error(err))

}

buscarPokemon()