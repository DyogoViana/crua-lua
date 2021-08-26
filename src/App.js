import React from 'react';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import TitleStyle from './styles/TitleStyle';
import HeaderStyle from './styles/HeaderStyle';
import BrandStyle from './styles/BrandStyle';

function App() {
	return (
		<>
			<HeaderStyle>
				<BrandStyle>Crua Lua</BrandStyle>
			</HeaderStyle>
			<Main>
				<TitleStyle>Agenda de fevereiro. aberta</TitleStyle>
			</Main>
			<Footer />
		</>
	);
}

export default App;
