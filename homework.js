const formData = document.querySelector('#form-data')
console.log(formData)
formData.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = formData.name.value
    console.log(name)
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        const pokemonName = data.name
        const pokemonBase = data.base_experience
        const pokemonSprite = data.sprites.front_shiny
        document.getElementsByClassName('pokename')[0].append(pokemonName)
        document.getElementsByClassName('pokebase')[0].append(pokemonBase)
        document.getElementsByClassName('pokesprite')[0].append(pokemonSprite)
    })
    .catch((response) => {
        console.error(response)
    })
})
