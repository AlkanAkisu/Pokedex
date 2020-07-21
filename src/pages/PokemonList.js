import React, { useState, useEffect } from 'react';
import { PokemonListItem } from '../utilities/PokemonListItem';
import { getAllPokemons } from '../api/api';

const PokemonList = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		const limit = 100;
    getAllPokemons(limit).then((rv)=>{
      console.log('got all pokemons');
      setPokemons(rv);
    });

	}, []);

	let pokemon_list_items = [];
	for (let [i, pokemon] of pokemons.entries()) {
		pokemon_list_items.push(
			<PokemonListItem key={pokemon.id} pokemon={pokemon}></PokemonListItem>
		);
	}
	return <div className='pokemonGrid'>{pokemon_list_items}</div>;
};

export default PokemonList;
