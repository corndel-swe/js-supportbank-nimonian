export async function getPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const data = await response.json()
  return data.results.map((pokemon) => pokemon.name)
}
