import styled, { createGlobalStyle } from 'styled-components'

export const GlobalCSS = createGlobalStyle`
  @font-face {
    font-family: 'SystemFont';
    src: url('./fonts/system.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'SystemFont', sans-serif
  }

  body{
    cursor: url('./cursors/cursor.svg'), auto;
  }
  
  a{
    cursor: url('./cursors/cursorpointer.svg'), auto;
  }
`