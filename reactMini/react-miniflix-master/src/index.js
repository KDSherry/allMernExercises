import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';

import Display from './components/Display';
import Callback from './components/Callback';
import Upload from './components/Upload';

const Root = () => {
  return (
    <div className="container">
		<Router history={browserHistory}>
			<Route path='/' component={Display} />
			<Route path='/callback' component={Callback} />
			<Route path='/upload' component={Upload} />
		</Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();