import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import PokemonList from './pages/PokemonList';
import PokemonDetails from './pages/PokemonDetails';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Route exact path='/' component={PokemonList} />
				<Switch>
					<Route exact path='/pokemon/:name' component={PokemonDetails} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
