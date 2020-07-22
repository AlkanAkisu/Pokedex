import React, { useEffect, useState } from 'react';
import {
	getPokemonByName,
	getPokemonsStats,
	getPokemonsMoves,
} from '../api/api';

const PokemonDetails = ({ history }) => {
	const path = window.location.pathname;
	const regex = /\/pokemon\/(\w*)/gim;
	const url_name = regex.exec(path)[1];



	let [currentPokemon, setCurrentPokemon] = useState({});
	let [moves, setMoves] = useState([]);
	let [stats, setStats] = useState({});
	let [loading, setLoading] = useState(true);

	useEffect(() => {

		getPokemonByName(url_name)
			.then((result) => {
				setCurrentPokemon(result);
			})
			.catch((reason) => {
				history.push('/');
			});
		getPokemonsStats(url_name).then((val) => setStats(val));
		getPokemonsMoves(url_name).then((val) => {
			setMoves(val);
			setLoading(false);
		});
	}, []);

	const { name, sprites, types, abilities } = currentPokemon;
	const alt = `name of ${name}`;

	//color them with their type
	let types_to_string = (types) => {
		return types.reduce((prev, curr) => {
			let name = curr.type.name;
			return name + '\n' + prev;
		}, '');
	};

	let AbilitiesSection = ({ ability: { name } }) => {
		return <li className='ability'>{name.toUpperCase()}</li>;
	};

	let MovesSection = ({ move: { name, url } }) => {
		return (
			<p className='move' onClick={() => move_clicked(url)}>
				{name}
			</p>
		);
	};

	let move_clicked = (url) => {
		let regex = /(?:https:\/\/pokeapi\.co\/api\/v2\/move\/)(.*)\//gi;
		let move_id = regex.exec(url)[1];

		history.push(`moves/${move_id}`);
	};

	if (!loading) {
		const type_text = types_to_string(types);
		return (
			<div className='pokemon-details-page'>
				<div className='img-box'>
					<img src={sprites.front_default} alt={alt} />
				</div>
				<div className='name-type-section'>
					<h1>{name.toUpperCase()}</h1>
					<h2>{type_text.toUpperCase()}</h2>
				</div>
				<ul className='abilities-section'>
					<h2>ABILTIES</h2>
					{abilities.map((val, i) => (
						<AbilitiesSection key={i} ability={val.ability}></AbilitiesSection>
					))}
				</ul>
				<div className='moves-section-box'>
					<h2>MOVES</h2>
					<div className='moves-section'>
						{moves.map((move, i) => (
							<MovesSection key={i} move={move}></MovesSection>
						))}
					</div>
				</div>
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
};

export default PokemonDetails;
