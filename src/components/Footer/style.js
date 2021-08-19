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

	&  ul {
		list-style: none;
	}

	&  li {
		display: inline-block;
	}

	&  li a {
		color: #fff;
		text-decoration: none;
		display: block;
		padding: 1em 2em;

	}

	li a:hover {
		padding-bottom: 1em;
		border-bottom: 3px solid #fff;
	}
`;

export default FooterStyle;
