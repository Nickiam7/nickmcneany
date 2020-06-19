import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';

const WorkItems = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressWpWork {
                edges {
                    node {
                        id
                        slug
                        title
                        excerpt
                        content
                        featured_media {
                            source_url
                        }
                    }
                }
            }
        }
        `} render={props => props.allWordpressWpWork.edges.map(workItem => (
            <div key={workItem.node.id}>
                <h1>{workItem.node.title}</h1>
                <img src={workItem.node.featured_media.source_url} width="25%" alt={workItem.node.title} />
                <div dangerouslySetInnerHTML={{__html: workItem.node.excerpt}} />
                <Link to={`/work/${workItem.node.slug}`}>
                    Read More
                </Link>
            </div>
        ))} />
    )
}

export default WorkItems;