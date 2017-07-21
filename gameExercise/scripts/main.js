import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './main/Home'
import CountdownPage from './pages/CountdownPage'

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='/CountdownPage' component={CountdownPage} />
		</Route>	
	</Router>	
, document.querySelector('#app'));
