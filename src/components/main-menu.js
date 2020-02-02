import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import globalClasses from './styles/globalClasses.module.css';
import {Container} from './styles/global';

const Nav = styled.nav`
    padding: .5rem 1rem;
    align-items: center;
`
const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(min-width: 768px) {
        justify-content: flex-end;
    }
`
const MenuItem = styled(Link)`
    text-decoration: none;
    color: #225596;
    font-weight: 700;
    margin-left: 0;
    margin-right: 0;
    &:hover {
        text-decoration: underline;
        background:
        radial-gradient(circle at 49% 59%, rgba(113, 113, 113,0.05) 0%, rgba(113, 113, 113,0.05) 50%,rgba(240, 240, 240,0.05) 50%, rgba(240, 240, 240,0.05) 100%),
        radial-gradient(circle at 16% 86%, rgba(118, 118, 118,0.05) 0%, rgba(118, 118, 118,0.05) 50%,rgba(207, 207, 207,0.05) 50%, rgba(207, 207, 207,0.05) 100%),
        radial-gradient(circle at 32% 12%, rgba(229, 229, 229,0.05) 0%, rgba(229, 229, 229,0.05) 50%,rgba(101, 101, 101,0.05) 50%, rgba(101, 101, 101,0.05) 100%),
        linear-gradient(252deg, rgb(33, 84, 149),rgb(117, 220, 202));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media(min-width: 768px) {
        margin-left: 25px;
        margin-right: 25px;
    }
`

const MainMenu = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter: {name: {eq: "main"}}){
            edges{
                node{
                    items{
                        title
                        object_slug
                        object_id
                    }
                }
            }
        }
    }
    `} render={props => (
        <Nav>
            <Container className={[globalClasses.justifySpaceBetween, globalClasses.flexDirectionColumnRow]}>
                <Link className={globalClasses.logo} to={'/'}><span>N</span>M</Link>
                <Menu className={globalClasses.menu}>
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                    <MenuItem to={item.object_slug} key={item.object_id}>
                        {item.title}
                    </MenuItem>
                ))}
                </Menu>
            </Container>
        </Nav>
    )} />             
);

export default MainMenu;