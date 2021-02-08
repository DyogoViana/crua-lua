import React from 'react';

import Main from './components/Main';
import Title from './components/Title';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
	return (
		<>
			<Header>Crua Lua</Header>
			<Main>
				<Title>Agenda de fevereiro aberta</Title>
			</Main>
			<Nav>menu</Nav>
		</>
	);
}

export default App;
