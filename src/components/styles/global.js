import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  html {    
    box-sizing: border-box;    
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
  h1 {
    margin-bottom: 5px;
    font-size: calc(5vw + 1rem);
    color: #ffffff;
  }
`
export const Container = styled.div`
  max-width: 1350px;
  display: flex;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export default GlobalStyles;