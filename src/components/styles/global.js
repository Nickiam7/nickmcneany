import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap');
  html {    
    box-sizing: border-box;
    overflow-x: hidden;    
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    color: #333333;
  }
  h1 {
    font-size: 3.75rem;
    font-weight: 400;
  }
  h2 {
    margin-bottom: 50px;
    font-size: 2.50rem;
    font-weight: 400;
    margin-top: 0;
  }
  h3 {
    font-size: 2.25rem;
    font-weight: 400;
  }
  p {
    font-size: 16px;
    @media(min-width: 768px) {
      font-size: 18px;
    }
    &.small {
      font-size: 16px;
    }
    &.text-center {
      text-align: center;
    }
  }
  .subhead {
    font-size: 1.5rem;
    font-family: "Inter UI",sans-serif;
    display: block;
    color: rgba(47,47,79,0.8);
    letter-spacing: -0.03em;
    line-height: 1.4em;
    font-weight: 200;
    p {
      font-size: 1.5rem;
    }
  }
  .nav {
    padding-top: 25px;
    padding-bottom: 25px;   
  }
  .nav__logo {
    display: inline-block;
    border: 1px solid #333333;
    width: 77px;
    transition: all .2s ease-in-out;
    &:hover {
      box-shadow: 0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)!important;
      transition: all .2s ease-in-out;
    }
  }
  .logo {
    font-size: 3.625rem;
    font-weight: 600;
    text-decoration: none;
    line-height: 1;
    letter-spacing: -16px;
    color: #333333;    
  }
  .nav__left {
    display: flex;
    align-items: center;
  }
  .nav__nav {
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    a[aria-current=page] {
      font-weight: 600;
      &:hover {
        color: rgba(47,47,79,0.8);
      }
    }
  }
  .stack {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    align-self: flex-start;
    @media(min-width: 768px) {
      width: 30.33333%;
    }
    h3 {
      margin-bottom: 0;
    }
    &__header {
      min-height: 125px;
    }
    .header-intro {
      font-size: 1.55rem;
      color: rgba(47,47,79,0.8);
      font-weight: 200;
    }
  }
  .jc-between {
    justify-content: space-between;
  }
  .section--dark {
    background-color: #000000;
    color: #ffffff;
  }
  .section--gradient {
    background-image: linear-gradient(45deg, rgb(43, 33, 93),rgb(81, 240, 237));
  }
`

export const Container = styled.div `
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media(min-width: 576px) {
    max-width: 540px;
  }
  @media(min-width: 768px) {
    max-width: 720px;
  }
  @media(min-width: 992px) {
    max-width: 960px;
  }
  @media(min-width: 1200px) {
    max-width: 1140px;
  }
`
export const Row = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: -15px;
  margin-left: -15px;
  @media(min-width: 768px) {
    flex-direction: row;
  }
`
export const Section = styled.div `
  padding-top: 50px;
  padding-bottom: 50px;
  @media(min-width: 768px) {
    padding-top: 150px;
    padding-bottom: 150px;
  }
`
export const Col = styled.div `
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;  
`
export const Col6 = styled.div `
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media(min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`
export const Col4 = styled.div `
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media(min-width: 768px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`
export const Col8 = styled.div `
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media(min-width: 768px) {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
`
export const HeroSpotLight = styled.div `
  display: flex;
  justify-content: center;
  padding: 25px;
  width: 50vw;     
  background-image: linear-gradient(45deg, rgb(43, 33, 93),rgb(81, 240, 237));
`
export default GlobalStyles;