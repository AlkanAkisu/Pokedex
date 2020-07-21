export const getAllPokemons = async (limit) => {
	const baseURL = 'https://pokeapi.co/api/v2';
	let rv = [];
	for (let i = 1; i <= limit; i++) {
		const response = await fetch(baseURL + `/pokemon/${i}`);
		const data = await response.json();
		rv.push(data);
	}

	return rv;
};

export const getPokemonByName = async (name) => {
  const baseURL = 'https://pokeapi.co/api/v2';
  // console.log('getting pokemon '+name);

	const response = await fetch(baseURL + `/pokemon/${name}`);
	const rv = await response.json();

  // console.log('got pokemon '+name);
	return rv;
};
