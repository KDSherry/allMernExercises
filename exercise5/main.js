import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/App';

ReactDOM.render(<App defaultProp='Default Prop from main.js'/>,
	document.querySelector("#content"));