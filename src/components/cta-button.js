import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const CtaButton = ( props ) => {
    return(
        <Button to={props.url} className={props.modifier}>
            {props.title}
        </Button>
    );
}

export const Button = styled(Link) `
    padding: 25px;
    background-color: #ffffff;    
    display: block;
    text-align: center;
    text-decoration: none;
    margin: 15px 0;
    width: 100%;
    border-radius: 1px;
    font-size: 18px;
    transition: all .2s ease-in-out;
    font-weight: 700 !important;
    @media(min-width: 768px) {
        display: inline-block;
    }
    &:hover,    
    &:visited,
    &:focus,
    &:active {
        color: #333333;
        background-color: #ffffff !important;
        transition: all .2s ease-in-out;
        box-shadow: 0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12);       
    } 
`

export default CtaButton;