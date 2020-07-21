import React from 'react';

function Navbar() {
	return (
		<nav className='navbar'>
			<ul className='navlinks'>
				<li className='navlink'>
					<a href='/' ontouchend='this.onclick=fix'>
						All Pokemons
					</a>
				</li>
				<li className='navlink'>
					<a href='/myPokemons' ontouchend='this.onclick=fix'>
						My Pokemons
					</a>
				</li>
				<li className='navlink'>
					<a href='/settings' ontouchend='this.onclick=fix'>
						Settings
					</a>
				</li>
			</ul>
		</nav>
	);
}
function fix() {
	var el = this;
	var par = el.parentNode;
	var next = el.nextSibling;
	par.removeChild(el);
	setTimeout(function () {
		par.insertBefore(el, next);
	}, 0);
}
export default Navbar;
