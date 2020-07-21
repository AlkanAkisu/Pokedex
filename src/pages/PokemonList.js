import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { PokemonListItem } from '../utilities/PokemonListItem';
import { getAllPokemons } from '../api/api';

const PokemonList = ({ history }) => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		const limit = 100;
		getAllPokemons(limit).then((rv) => {
			console.log('got all pokemons');
			setPokemons(rv);
		});
	}, []);

	let pokemon_list_items = [];

	let callback = (name) => {
		console.log('redirect: ' + name);
		const site = '/pokemon/' + name;
		history.push(site);
	};

	for (let pokemon of pokemons) {
		pokemon_list_items.push(
			<PokemonListItem
				key={pokemon.id}
				pokemon={pokemon}
				callback={callback}></PokemonListItem>
		);
	}
	return <div className='pokemonGrid'>{pokemon_list_items}</div>;
};

export default PokemonList;
