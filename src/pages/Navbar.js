import React from 'react';

function Navbar() {
	return (

			<nav className='navbar' >
				<ul className='navlinks'>
					<li className='navlink'>
						<a href='/allPokemons'>All Pokemons</a>
					</li>
					<li className='navlink'>
						<a href='/myPokemons'>My Pokemons</a>
					</li>
					<li className='navlink'>
						<a href='/settings'>Settings</a>
					</li>
				</ul>
			</nav>

	);
}

export default Navbar;