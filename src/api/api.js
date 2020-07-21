export const getAllPokemons = async(limit) => {
  const baseURL = 'https://pokeapi.co/api/v2';
  let rv = [];
  for (let i = 1; i <= limit; i++) {
    const response = await fetch(baseURL + `/pokemon/${i}`);
    const data = await response.json();
    rv.push(data);
  }

	return rv
}