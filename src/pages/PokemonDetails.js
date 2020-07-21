import React, { useEffect, useState } from 'react';
import { getPokemonByName } from '../api/api';

const PokemonDetails = (props) => {
	const path = window.location.pathname;
	const regex = /\/pokemon\/(\w*)/gim;
	const url_name = regex.exec(path)[1];

	let [currentPokemon, setCurrentPokemon] = useState({});
	let [loading, setLoading] = useState(true);
	let page_details = [];

	useEffect(() => {
		getPokemonByName(url_name)
			.then((result) => {
				console.log(result);
				setCurrentPokemon(result);
				setLoading(false);
			})
			.catch((reason) => {
				props.history.push('/');
				//console.log(reason);
				//setLoading(false);
			});
	}, []);

	const { name, sprites, types, abilities } = currentPokemon;
	const alt = `name of ${name}`;


	if (!loading) {
		const type_text = types_to_string(types);
		console.log(abilities);
		return (
			<div className='pokemon-details-page'>
				<div className='img-box'>
					<img src={sprites.front_default} alt={alt} />
				</div>
				<div className='name-type-section'>
					<h1>{name.toUpperCase()}</h1>
					<h2>{type_text.toUpperCase()}</h2>
				</div>
				<ul className="abilities-section">
					{abilities.map((val,i) => <AbilitiesSection key={i} ability={val.ability}></AbilitiesSection>)}
				</ul>
			</div>
		);
	} else {
		return <div>Loading</div>;
	}



};
//color them with their type
let types_to_string = (types) => {
	return types.reduce((prev, curr) => {
		let name = curr.type.name;
		return name + '\n' + prev;
	}, '');
};

let AbilitiesSection = ({ability}) => {
	const {name} = ability;
	return <li className='ability'>{name.toUpperCase()}</li>
}

export default PokemonDetails;
