import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

import { Container, Row, Col6 } from '../components/styles/global';
import CtaButton from '../components/cta-button';

import styled from 'styled-components';

const NavLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    font-weight: 200;
    color: rgba(47,47,79,0.8);
    &:hover {
        color: rgba(47,47,79,0.6);
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
    `} render={data => (
        <nav className="nav">
            <Container>
                <Row>                        
                    <Col6 className='nav__left'>
                        <div className='nav__logo'>
                            <Link to={'/'} className="logo"><span>N</span><span>M</span></Link>                
                        </div>
                        <div className='nav__nav'>
                            {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                                <NavLink to={`/${item.object_slug}`} key={item.object_id}>
                                    {item.title}
                                </NavLink>
                            ))}    
                        </div>
                    </Col6>
                    <Col6 className='nav__nav jc-end'>
                        <CtaButton 
                            title='Contact Me'
                            url='/contact'
                            modifier='header-cta'
                        />
                    </Col6>
                </Row>
            </Container>            
        </nav>
    )} />             
);

export default MainMenu;