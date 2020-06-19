import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';

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
        <nav>            
            <Link  to={'/'}><span>N</span>M</Link>                
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                <Link to={item.object_slug} key={item.object_id}>
                    {item.title}
                </Link>
            ))}            
        </nav>
    )} />             
);

export default MainMenu;