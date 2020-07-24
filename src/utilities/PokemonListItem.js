import React from 'react';

export const PokemonListItem = ({ pokemon, callback }) => {
	const { name, sprites, types } = pokemon;
	let type_str = '';

	types.forEach(({ type }, i) => {
		type_str += type.name.toUpperCase() + ' ';
	});
	const alt = `name of ${name}`;

	const direct_to_details = () => {
		callback(name);
	};

	return (
		<div className='card' onClick={direct_to_details}>
			<h1>{name.toUpperCase()}</h1>
			<img src={sprites.front_default} alt={alt} />
			<p>{type_str}</p>
		</div>
	);
};
