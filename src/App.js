import React from 'react';

import Header from './components/Header';
import Brand from './components/Brand';
import Title from './components/Title';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
	return (
		<>
			<Header>
				<Brand>Crua Lua</Brand>
			</Header>
			<Main>
				<Title>Agenda de fevereiro. aberta</Title>
			</Main>
			<Nav>menu</Nav>
		</>
	);
}

export default App;
