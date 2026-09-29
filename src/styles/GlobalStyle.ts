import { createGlobalStyle } from 'styled-components'

export const colors = {
  coral: '#E66767',
  cream: '#FFF8F2',
  soft: '#FFEBD9',
  white: '#FFFFFF',
  text: '#E66767',
  dark: '#2F2A2A'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    background: ${colors.cream};
    color: ${colors.text};
    font-family: Inter, Roboto, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input {
    font: inherit;
  }

  button {
    cursor: pointer;
  }
`
