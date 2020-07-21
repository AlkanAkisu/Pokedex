import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import PokemonList  from './pages/PokemonList';

function App() {
	return (
		<div className='App'>
		<Navbar />
		<PokemonList />
		</div>
	);
}

export default App;
