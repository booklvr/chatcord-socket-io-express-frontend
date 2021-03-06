import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --dark-color-a: #667aff;
	  --dark-color-b: #7386ff;
	  --light-color: #e6e9ff;
	  --success-color: #5cb85c;
	  --error-color: #d9534f;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: var(--light-color);
    margin: 20px;
  }

  ul {
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }
`
