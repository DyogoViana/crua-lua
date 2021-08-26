import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
    body,
	 header,
	 main {
		font-family: 'Quicksand', sans-serif;
		font-size: 1rem;
		color: #fff;
		text-align: left;
      background-color: #e74c3f;
		overflow: hidden; /* Hide scrollbars */
    }
`;

export default Base;
