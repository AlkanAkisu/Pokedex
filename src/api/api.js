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

	const response = await fetch(baseURL + `/pokemon/${name}`);
	const rv = await response.json();

	return rv;
};

export const getPokemonsMoves = async (name) => {
	const baseURL = 'https://pokeapi.co/api/v2';

	const response = await fetch(baseURL + `/pokemon/${name}`);
	const pokemon = await response.json();
	const { moves } = pokemon;

	let simple_moves = moves.reduce((prev, curr) => {
		let { move } = curr;
		return [...prev, move];
	}, []);

	return simple_moves;
};
export const getPokemonsStats = async (name) => {
	const baseURL = 'https://pokeapi.co/api/v2';

	const response = await fetch(baseURL + `/pokemon/${name}`);
	const pokemon = await response.json();
	const { stats } = pokemon;

	let simple_stats = stats.reduce((prev, curr) => {
		let {
			base_stat,
			stat: { name, url },
		} = curr;
		return {
			...prev,
			[name]: {
				url,
				base_stat,
			},
		};
	}, {});

	return simple_stats;
};
