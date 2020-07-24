import React, { useState, useEffect } from 'react';
import { PokemonListItem } from '../utilities/PokemonListItem';
import { getAllPokemons } from '../api/api.js';

const PokemonList = ({ history }) => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [pokemonListItems, setPokemonListItems] = useState([]);

	useEffect(() => {
		const limit = 200;
		setLoading(true);
		getAllPokemons(limit).then((rv) => {
			setPokemons(rv);

			let dummy_array = rv.reduce((prev, pokemon) => {
				if (pokemon.id !== undefined) {
					prev.push(
						<PokemonListItem
							key={pokemon.id}
							pokemon={pokemon}
							callback={callback}></PokemonListItem>
					);
				}
				return prev;
			}, []);

			setPokemonListItems(dummy_array);
			setLoading(false);
		});
	}, []);

	let callback = (name) => {
		const site = '/pokemon/' + name;
		history.push(site);
	};

	if (!isLoading) {
		return <div className='pokemonGrid'>{pokemonListItems}</div>;
	} else {
		return <div style={style()}>Loading</div>;
	}
};

const style = () => {
	return { margin: '4rem' };
};

export default PokemonList;
