import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Films from './films/Films';
import Actors from './actors/Actors';
import FilmDescription from './films/FilmDescription';
import ActorDetails from './actors/ActorDetails';
import Home from './main/Home';

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='/films' component={Films}>
				<Route path='/films/:filmName' component={FilmDescription}/>
			</Route>
			<Route path='/actors' component={Actors}>
				<Route path='/actors/:actorName' component={ActorDetails}/>
				
			</Route>
		</Route>	
	</Router>	
, document.querySelector('#app'));
