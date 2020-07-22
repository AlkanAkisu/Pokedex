import React, { useState, useEffect } from 'react';
import { PokemonListItem } from '../utilities/PokemonListItem';
import { getAllPokemons } from '../api/api';

const PokemonList = ({ history }) => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const limit = 200;
		setLoading(true);
		getAllPokemons(limit).then((rv) => {
			setLoading(false);
			setPokemons(rv);
		});
	}, []);

	let pokemon_list_items = [];

	let callback = (name) => {
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
	if (!isLoading) {
		return <div className='pokemonGrid'>{pokemon_list_items}</div>;
	}else{
		return <div style={style()} >Loading</div>;
	}

};

const style = () => {
	return {margin:'4rem'};
}

export default PokemonList;
