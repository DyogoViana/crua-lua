import React from 'react';
import ReactDOM from 'react-dom';

import Reset from './generic/Reset';
import Base from './styles/Base';

import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Reset />
		<Base />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
