import React from 'react';

export const PokemonListItem = ({ pokemon }) => {
	const { name, sprites, types } = pokemon;
	let type_str = '';
	types.forEach(({type}, i) => {
		type_str += type.name.toUpperCase() + ' ';
	});
	const alt = `name of ${name}`;
	return (
		<div className='card'>
			<h1>{name.toUpperCase()}</h1>
			<img src={sprites.front_default} alt={alt} />
			<p>{type_str}</p>
		</div>
	);
};
