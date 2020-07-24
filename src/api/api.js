
//Thanks to the Promise.all() we can improve speed
//by 14 times in the first time opening the site
export const getAllPokemons = async (limit) => {
	const baseURL = 'https://pokeapi.co/api/v2';
	let urls = [];
	let rv = [];
	console.time('Total Timer');

	for (let i = 1; i <= limit; i++) {
		urls[i - 1] = baseURL + `/pokemon/${i}`;
	}

	let responses = await Promise.all(urls.map((u) => fetch(u)));
	rv = await Promise.all(responses.map((res) => res.json()));


	console.timeEnd('Total Timer');

	console.log(rv);

	return rv;
};

export const getAllPokemons_slow = async (limit) => {
	const baseURL = 'https://pokeapi.co/api/v2';
	let rv = [];
	console.time('Total Timer for slow');
	for (let i = 1; i <= limit; i++) {
		const response = await fetch(baseURL + `/pokemon/${i}`);
		const data = await response.json();
		rv.push(data);
	}
	console.timeEnd('Total Timer for slow');
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
