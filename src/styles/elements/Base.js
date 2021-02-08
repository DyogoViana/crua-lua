import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
    body,
	 header,
	 main {
		color: #fff;
		font-size: 1rem;
		text-align: left;
		font-family: 'Quicksand', sans-serif;
      background-color: #e74c3f;
		overflow: hidden; /* Hide scrollbars */
    }
`;

export default Base;
