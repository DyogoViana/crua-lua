import React from "react";
import { NavLink } from "react-router-dom";

let linkAtivo = {
	color: "green"
};

const Navegacao = () => {
	return (
		<ul>
			<li><NavLink exact activeStyle={linkAtivo} to="/trabalhos">Trabalhos</NavLink></li>
			<li><NavLink exact activeStyle={linkAtivo}>Sobre</NavLink></li>
			<li><NavLink exact activeStyle={linkAtivo}>Instagram</NavLink></li>
		</ul>
	);
};

export default Navegacao;
