import React from 'react';
import ReactDOM from 'react-dom';

import Base from './styles/elements/Base';

import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Base />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
