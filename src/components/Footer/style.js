import styled from 'styled-components';

const FooterStyle = styled.footer`
	font-size: 1rem;
	font-weight: 500;

	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 1em;
	justify-content: center;
	height: 20vh;
	background-color: tomato;

	&  ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	&  h1 {
		width: 200px;
		height: 50px;
		margin: 0 auto;
	}

	&  ul {
		background: #c8e0e8;
		border-bottom: 1px solid #cacaca;
	}

	&  li {
		display: inline-block;
		border-right: 1px solid #999;
	}

	&  li a {
		text-transform: uppercase;
		font-weight: bold;
		color: #000;
		text-decoration: none;
		display: block;
		padding: 8px 20px;
	}
`;

export default FooterStyle;
